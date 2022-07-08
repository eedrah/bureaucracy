import { sample } from 'lodash'
import dialogue, {
  oneDirection,
  returnToStart,
  twoDirections,
} from './dialogue'

export enum Offices {
  Reception,
  HR,
  Stationary,
  IT,
}

export const questionsForOffice = {
  [Offices.Reception]: [
    'Reception question 1',
    'Reception question 2',
    'Reception question 3',
    'Reception question 4',
  ],
  [Offices.HR]: [
    'HR question 1',
    'HR question 2',
    'HR question3',
    'HR question4',
  ],
  [Offices.Stationary]: ['Stationary question'],
  [Offices.IT]: ['IT question'],
}

export const allQuestions = Object.values(questionsForOffice).flat()

function isValidTruth(previousOffice: Offices, withData: string) {
  return questionsForOffice[previousOffice].includes(withData)
}

const Solved = 'SOLVED'
const SolvedMessage =
  'Great, I think we are all sorted here. Go tell Jesse that you are "Good to go".'
const ErrorMessage =
  "Hmmm, something's gone a bit weird here. You should probably go get the bossman Jesse."
function getNextStages(currentOffice: Offices, previousOffice: Offices) {
  return {
    [Offices.Reception]: {
      [Offices.Stationary]: [Offices.HR, Offices.IT],
      [Offices.IT]: [Offices.HR, Offices.Stationary],
      [Offices.HR]: [Offices.IT, Offices.Stationary],
    },
    [Offices.HR]: {
      [Offices.Reception]: [Offices.IT, Offices.Stationary],
      [Offices.Stationary]: [Offices.Reception, Offices.IT],
      [Offices.IT]: [Offices.Reception],
    },
    [Offices.IT]: {
      [Offices.HR]: [Offices.HR, Offices.Reception],
      [Offices.Reception]: [Offices.HR, Offices.Reception],
      [Offices.Stationary]: [Offices.Reception, Offices.Stationary],
    },
    [Offices.Stationary]: {
      [Offices.IT]: [Solved],
      [Offices.HR]: [Offices.Reception, Offices.IT],
      [Offices.Reception]: [Offices.HR],
    },
  }[currentOffice][previousOffice]
}

export function generateResponseToAllQuestions(
  currentOffice: Offices,
  previousOffice: Offices,
  withData: string
) {
  if (isValidTruth(previousOffice, withData)) {
    const nextData = sample(dialogue.withDataResponses)!

    const nextStages = getNextStages(currentOffice, previousOffice)
    if (nextStages?.[0] === Solved) {
      return SolvedMessage
    } else if (nextStages?.length === 1) {
      const nextDirection = sample(oneDirection)!
      return nextDirection(Offices[nextStages[0] as Offices], nextData)
    } else if (nextStages?.length === 2) {
      const nextDirection = sample(twoDirections)!
      return nextDirection(
        Offices[nextStages[0] as Offices],
        Offices[nextStages[1] as Offices],
        nextData
      )
    } else {
      return ErrorMessage
    }
  } else {
    return sample(returnToStart)!
  }
}
