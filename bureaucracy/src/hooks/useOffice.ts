import { useReducer } from 'react'
import { sample } from 'lodash'
import dialogue from '../funcs/dialogue'

export enum Offices {
  Reception,
  HR,
  Stationary,
  IT,
}

enum QuestionStage {
  SentBy,
  WithData,
  WhichIs,
  Leaving,
}

function getSentByOptionsFor(office: Offices): Offices[] {
  return Object.values(Offices)
    .filter((v) => !isNaN(Number(v)))
    .filter((o) => o !== office) as Offices[]
}

type State = {
  office: Offices
  welcome: string
  sentByOptions: Offices[]
  sentBy: Offices | undefined
  sentByResponse: string | undefined
  withData: string | undefined
  withDataResponse: string | undefined
  whichIs: string | undefined
  whichIsResponse: string | undefined
}

const initializeStateFor = (office: Offices): State => ({
  office,
  welcome: sample(dialogue.welcomes)!,
  sentByOptions: getSentByOptionsFor(office),
  sentBy: undefined,
  sentByResponse: undefined,
  withData: undefined,
  withDataResponse: undefined,
  whichIs: undefined,
  whichIsResponse: undefined,
})

enum ActionKind {
  SentBy,
}
type Actions = {
  type: ActionKind.SentBy
  office: Offices
}

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionKind.SentBy:
      return {
        ...state,
        sentBy: action.office,
        sentByResponse: sample(dialogue.sentByResponses),
      }
    default:
      throw new Error()
  }
}

const useOffice = (office: Offices) => {
  const [state, dispatch] = useReducer(reducer, office, initializeStateFor)

  return {
    state,
    sentBy: (office: Offices) =>
      dispatch({
        type: ActionKind.SentBy,
        office,
      }),
  }
}

export default useOffice
