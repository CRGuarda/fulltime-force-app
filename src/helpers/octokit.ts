import { Octokit } from 'octokit'

export const octokit = new Octokit({ auth: process.env.API_TOKEN })
