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

function getSentByOptionsFor(office: Offices) {
  return Object.keys(Offices)
    .filter((k) => isNaN(Number(k)))
    .filter((o) => o !== Offices[office])
}

const initializeStateFor = (office: Offices) => ({
  office,
  welcome: sample(dialogue.welcomes),
  sentByOptions: getSentByOptionsFor(office),
  sentBy: undefined,
  sentByResponse: undefined,
  withData: undefined,
  withDataResponse: undefined,
  whichIs: undefined,
  whichIsResponse: undefined,
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'sentBy':
      return {
        ...state,
        sentBy: action.data,
        sentByResponse: sample(dialogue.sentByResponses),
      }
    default:
      throw new Error()
  }
}

const useOffice = (office: Offices) => {
  const [state, dispatch] = useReducer(reducer, office, initializeStateFor)

  return state
}

export default useOffice
