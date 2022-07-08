import { sample } from 'lodash'
import { Offices } from '../hooks/useOffice'
import dialogue from './dialogue'

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

function getNextStages(currentOffice: Offices, previousOffice: Offices) {
  return {
    hr: {
      mm: [cc, im],
      im: [cc, mm],
      cc: [im, mm],
    },
    cc: {
      hr: [im, mm],
      mm: [hr, im],
      im: [hr],
    },
    im: {
      cc: [cc, hr],
      hr: [cc, hr],
      mm: [hr, mm],
    },
    mm: {
      im: [solved],
      cc: [hr, im],
      hr: [cc],
    },
  }[currentOffice][previousOffice]
}

export function generateResponseToAllQuestions(
  currentOffice: Offices,
  previousOffice: Offices,
  withData: string
) {
  if (isValidTruth(previousOffice, withData)) {
    getNextStages(currentOffice, previousOffice)
  } else {
    // getStart()
  }

  return sample(dialogue.whichIsResponses)
}
