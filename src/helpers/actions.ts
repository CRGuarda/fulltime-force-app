export type CommitData = {} | null

export const requestStarted = (data?: CommitData) => ({
  type: 'REQUEST_STARTED',
  data,
})

export const requestSuccessful = (data: CommitData) => ({
  type: 'REQUEST_SUCCESSFUL',
  data,
})

export const requestFailed = (data: CommitData) => ({
  type: 'REQUEST_FAILED',
  data,
})
