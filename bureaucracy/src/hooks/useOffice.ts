import { useReducer } from 'react'
import { sample } from 'lodash'
import dialogue from '../funcs/dialogue'
import {
  generateResponseToAllQuestions,
  Offices,
  questionsForOffice,
} from '../funcs/logic'

// enum QuestionStage {
//   SentBy,
//   WithData,
//   WhichIs,
//   Leaving,
// }

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
  isRegistering: boolean
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
  isRegistering: false,
})

enum ActionKind {
  SentBy,
  WithData,
  WhichIs,
  Reset,
  Register,
}
type Actions =
  | {
      type: ActionKind.SentBy
      office: Offices
    }
  | {
      type: ActionKind.WithData
      question: string
    }
  | {
      type: ActionKind.WhichIs
      answer: string
    }
  | {
      type: ActionKind.Reset
    }
  | {
      type: ActionKind.Register
    }

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionKind.SentBy:
      return {
        ...state,
        sentBy: action.office,
        sentByResponse: sample(dialogue.sentByResponses),
      }
    case ActionKind.WithData:
      return {
        ...state,
        withData: action.question,
        withDataResponse: sample(dialogue.withDataResponses),
      }
    case ActionKind.WhichIs:
      return {
        ...state,
        whichIs: action.answer,
        whichIsResponse: generateResponseToAllQuestions(
          state.office,
          state.sentBy!,
          state.withData!
        ),
      }
    case ActionKind.Reset:
      return initializeStateFor(state.office)
    case ActionKind.Register:
      return {
        ...state,
        whichIsResponse: generateResponseToAllQuestions(
          state.office,
          Offices.IT,
          questionsForOffice[Offices.IT][0]
        ),
        isRegistering: true,
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
    withData: (question: string) =>
      dispatch({
        type: ActionKind.WithData,
        question,
      }),
    whichIs: (answer: string) =>
      dispatch({
        type: ActionKind.WhichIs,
        answer,
      }),
    reset: () =>
      dispatch({
        type: ActionKind.Reset,
      }),
    register: () =>
      dispatch({
        type: ActionKind.Register,
      }),
  }
}

export default useOffice
