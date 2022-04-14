# Practice Repo

## Steps to run this repo locally

1. [Fork this repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. [Clone your new fork on VSCode](https://docs.microsoft.com/en-us/azure/developer/javascript/how-to/with-visual-studio-code/clone-github-repository?tabs=create-repo-command-palette%2Cinitialize-repo-activity-bar%2Ccreate-branch-command-palette%2Ccommit-changes-command-palette%2Cpush-command-palette)
3. Open your terminal in VSCode. Press `Cmd + ` `
4. If the terminal is not currently at the working directory, (check using `pwd`), change directory to the working directory. For example: `cd dev/practice-repo`
5. Install the project's dependencies. Run

```bash
npm install
```

6. Test the project. Run

```bash
npm run dev
```

And navigate to http://localhost:3000 in your browser. You should see a `Hello World` message and no errors.

At this point you have Next.js working environment with tailwindcss and the Reservoir Tailwind plugin `@ramosdiego/reservoir` which includes the Figma styles as tailwind classes. Examples: `reservoir-subtitle`, `reservoir-h1`.
