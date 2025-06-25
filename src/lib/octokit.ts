import { Octokit } from '@octokit/rest';

const token = import.meta.env.GITHUB_TOKEN;

export const octokit = new Octokit({
  auth: token
});

