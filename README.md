# Project Name

## Description

This project is the outcome of learning to code by creating a calculator.

## Installation

This is is a nodejs project which uses standard npm for installation of dependencies.

`npm install` or `npm i` as the shortcut will install the node_modules that the code depends on.

The [./.gitignore](./.gitignore) file tells git not to commit the `node_modules` folder. Each new pull from git may require a new execution of `npm i` to install any newly added dependencies where have been added to [./package.json](./package.json)

To test that we have pulled down working code, we run `npm test` to test the code. This way if any changes result in errors we know the changes made locally have broken the code or outdated one or more tests.

As a shortcut we can also run both commands as one as `npm it` for install and test. See [npm docs](https://docs.npmjs.com/cli/v10/commands/npm-install-test) for more about this and other commands and shortcuts.

## Usage

The steps above cover main the usage. This repository is just the code and tests to run the code.

A node server is available which runs the express library and serves the static webpage on localhost as a local server.

To start the server run this command and then click the link in the console to open the server or otherwise type it into the browser.

`npm run dev`

## Contributing

Adding tests and calculator functionality are a good continuous effort.

Create a new branch and make a pull request with any proposed changes.

(very technical documentation about Pull Requests)[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges] is available.

To read a summary about that page, see the next section on Pull Requests.

To keep the code standard, we have the prettier library install and available as a command. Please run this before committing changes.

`npm run format:prettier`

### Submitting a PR

If you are not familiar with the PR process, let us take this opportunity to introduce you to one of the most essential aspects of collaborative software development. Here's a simple and clear explanation:

---

"Pull Requests (PRs) on GitHub are a core feature that facilitates code review and collaboration in software development. Let's break it down:

### What is a Pull Request?

- A Pull Request is essentially a request to merge code from one branch (typically a development branch) into another (usually the main branch).
- It's like saying, 'I've made some changes in this branch, can we review and then merge it into the main codebase?'

### Why Use Pull Requests?

1. **Code Review:** PRs allow team members to review code changes before they are merged. This is crucial for maintaining code quality and consistency. When learning to code, this is a great chance for everyone participating to offer insights and ask questions to build the knowledge of all involved.
2. **Collaboration:** They facilitate discussion about the code. Team members can comment, suggest changes, or ask questions directly on the PR.
3. **Track Changes:** PRs provide a clear history of what changes were made and why, which is valuable for tracking project progress.

### How Does It Work?

1. **Branching:** You start by creating a new branch from the main codebase using git. This branch where you'll make your changes.
2. **Making Changes:** After you've made your changes in this branch, commit them and push the branch to GitHub.
3. **Creating the Pull Request:** On GitHub, you then open a new PR from your branch. Add a title to summarize your work, a great description to summarize what others can expect to see, why you coded what you did, etc. You can invite reviewers to your PR.
4. **Review Process:** Your team reviews the code, discussing and possibly requesting changes. You and others can make further commits to the branch if needed.
5. **Merging:** Once everyone is content with the changes on the branch, the PR gets approved, and the code is merged into the main branch where the process of branching an updating hopefully continue for a long time.

### Best Practices:

- **Descriptive Titles:** Use clear titles and descriptions for your PRs so that team members can quickly understand what the PR is about.
- **Detailed Descriptions:** Explain what changes you've made and why. This helps reviewers understand your reasoning.
- **Small, Focused Changes:** Smaller PRs are easier to review than large ones. Try to keep your changes focused on a specific feature or fix.
- **Respond to Feedback:** Be responsive to comments and feedback from your reviewers.

Pull Requests are not mainly about merging code; they're about communication and collaboration. They're often the best way for you and the team to work together to produce the best possible software.

---

## Contact

Mention here what your level of coding is and that you are looking to work as a software developer.

This could help make connections for getting invited to work on open source projects or getting hired to do paid work.

Provide contact information here for others to reach out to you.
