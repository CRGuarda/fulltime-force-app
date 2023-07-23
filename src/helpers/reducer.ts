import { CommitData } from '@/helpers/actions'

// a reducer receives the current state and an action
export const reducer = (state: any, action: { type: string; data: CommitData | undefined }) => {
  // we check the type of each action and return an updated state object accordingly
  switch (action.type) {
    case 'REQUEST_STARTED':
      return {
        ...state,
        isLoading: true,
        data: [],
        error: null,
      }
    case 'REQUEST_SUCCESSFUL':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.data,
      }
    case 'REQUEST_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.data,
      }

    default:
      return state
  }
}
