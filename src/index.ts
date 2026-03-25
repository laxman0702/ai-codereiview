import * as core from '@actions/core';

async function run() {
  const apiKey = process.env.OPENAI_API_KEY;

  console.log("AI Code Review Started...");
  console.log("API KEY exists:", !!apiKey);

  // your logic here
}

run();