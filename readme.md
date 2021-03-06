# Assignment One
You can view the project here: [https://uic-cs484.github.io/assignment-1---team-project-proposal-team-8/proposal.html](https://uic-cs484.github.io/assignment-1---team-project-proposal-team-8/proposal.html)

## Team Workflow Strategy
We will use [trunk-based development](https://trunkbaseddevelopment.com/) in order to commit our work. In essence, this means that we will be pushing our commits to a single branch.

To accomplish this, we can have as many local branches as we desire. Once we have work to push, we will prepare our commit by merging and squashing the commit(s) into one commit, rebasing against the current `origin/main`, and push this single commit to the trunk branch.

We will create **pull requests** (instead of just pushing our code) for the code we'd like to merge into the origin. Each PR will be reviewed before merging.

Our team will communicate in person & through Discord. We will regularly meet online to discuss the status of our tasks, any blockers that we're encountering, and any ideas that we have.

### Creating a Pull Request
Once you've finished your work, you can create a pull request like so:

1. Rebase your work against `origin/main`
```
$ git pull --rebase
```
2. Create a new branch `staging` by issuing the command:
```
$ git checkout -b staging
  Switched to a new branch ‘staging’
```
3. Add files you want to commit:
```
$ git add . || git add "file name"
```
4. Create a commit with a message using this command:
```
$ git commit -S -m "Added this feature"
```
5. Push to `staging` branch:
```
$ git push -u origin staging
```
6. Navigate to [https://github.com/UIC-CS484/assignment-1---team-project-proposal-team-8/pull/new/staging](https://github.com/UIC-CS484/assignment-1---team-project-proposal-team-8/pull/new/staging)
7. In the **Open a pull request** prompt, enter comments describing your changes and click **Create pull request**.
8. Once your changes are reviewed & approved, they will be merged into the main branch and deployed to production.

## Team Members
### Farooq Syed 
- [srizwa3@uic.edu](srizwa3@uic.edu)
- [https://github.com/Faro0q](https://github.com/Faro0q)

###  Will Cygan 
- [wcygan2@uic.edu](wcygan2@uic.edu)
- [https://github.com/wcygan](https://github.com/wcygan)

### Stas Kobylarz 
- [skobyl2@uic.edu](skobyl2@uic.edu)
- [https://github.com/Stasioo](https://github.com/Stasioo)

## Development Tools
TODO