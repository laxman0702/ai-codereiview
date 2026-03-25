const core = require('@actions/core');

async function run() {
  try {
    const token = core.getInput('github-token');
    console.log("AI Code Review running...");
    console.log("Token received:", token ? "YES" : "NO");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();