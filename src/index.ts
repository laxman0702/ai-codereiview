import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  try {
    const token = process.env.OPENAI_API_KEY;

    if (!token) {
      core.setFailed('Missing OPENAI_API_KEY');
      return;
    }

    const context = github.context;

    core.info(`Repo: ${context.repo.owner}/${context.repo.repo}`);
    core.info(`PR Number: ${context.payload.pull_request?.number}`);

    // Example output
    core.notice('AI Code Review executed successfully 🚀');

  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
