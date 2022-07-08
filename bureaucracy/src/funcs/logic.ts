import { Offices } from '../hooks/useOffice'

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
