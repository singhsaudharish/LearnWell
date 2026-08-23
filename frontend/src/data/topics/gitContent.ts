export const gitContent = {
  title: "Git & GitHub",
  description:
    "Learn Git and GitHub from beginner to advanced with commands, workflows, collaboration, and real-world examples.",

  sections: [

    {
      title: "Introduction to Git",
      content: `
Git is a distributed version control system used to track changes in source code during software development.

It was created by Linus Torvalds in 2005.

Git allows developers to:

• Track file changes

• Collaborate with teams

• Manage different versions of a project

• Restore previous versions

• Work safely using branches
      `,
    },


    {
      title: "What is Version Control?",
      content: `
Version Control is a system that records changes made to files over time.

Benefits:

• Keeps project history

• Allows collaboration

• Prevents accidental data loss

• Makes reverting changes easy

• Helps manage different versions of code
      `,
    },


    {
      title: "Types of Version Control Systems",
      content: `
There are three main types of version control systems.


1. Local Version Control

Stores versions on a single computer.


2. Centralized Version Control (CVCS)

Uses a central server.

Examples:

• SVN

• Perforce


3. Distributed Version Control (DVCS)

Every developer has a complete copy of the repository.

Example:

• Git
      `,
    },


    {
      title: "Why Use Git?",
      content: `
Git is one of the most popular version control systems because it is:

• Fast

• Free and Open Source

• Distributed

• Reliable

• Secure

• Easy to branch and merge

• Widely used in the software industry
      `,
    },


    {
      title: "Features of Git",
      content: `
Major features of Git:

• Distributed Architecture

• High Performance

• Branching and Merging

• Data Integrity

• Offline Development

• Open Source

• Lightweight
      `,
    },


    {
      title: "Applications of Git",
      content: `
Git is used in many software projects.

Applications:

• Web Development

• Mobile Development

• Game Development

• Data Science

• Machine Learning

• DevOps

• Open Source Projects
      `,
    },


    {
      title: "Git vs GitHub",
      content: `
Git and GitHub are different technologies.

Git:

• Version Control System

• Installed locally

• Tracks project history


GitHub:

• Cloud hosting platform

• Stores Git repositories online

• Enables collaboration

• Provides Pull Requests and Issues
      `,
    },


    {
      title: "Installing Git",
      content: `
Download Git from the official website.

Steps:

1. Download Git installer.

2. Run the installer.

3. Complete installation.

4. Verify installation using Git terminal.
      `,
      code: `git --version`,
      language: "bash",
      output: `git version 2.xx.x`,
      tip: "Always install the latest stable version of Git.",
    },


    {
      title: "Configuring Git",
      content: `
Before using Git, configure your username and email.

These details are stored in every commit.
      `,
      code: `git config --global user.name "Harish"

git config --global user.email "harish@example.com"`,
      language: "bash",
      output: "Global configuration saved",
    },


    {
      title: "Viewing Git Configuration",
      content: `
Display all Git configuration settings.
      `,
      code: `git config --list`,
      language: "bash",
      output: `
user.name=Harish
user.email=harish@example.com
      `,
    },


    {
      title: "Git Architecture",
      content: `
Git mainly works with three areas.

• Working Directory

• Staging Area

• Local Repository

Changes move between these areas before being stored permanently.
      `,
    },


    {
      title: "Working Directory",
      content: `
The Working Directory contains your project files.

You edit, create, and delete files here before saving them into Git.
      `,
    },


    {
      title: "Staging Area",
      content: `
The Staging Area temporarily stores changes before a commit.

Files must be added to the staging area before they become part of a commit.
      `,
    },


    {
      title: "Local Repository",
      content: `
The Local Repository stores all committed project history on your computer.

Every commit becomes part of the repository history.
      `,
    },


    {
      title: "Git Workflow",
      content: `
Basic Git workflow:

Working Directory

↓

git add

↓

Staging Area

↓

git commit

↓

Local Repository
      `,
    },


    {
      title: "Creating a Repository",
      content: `
A repository stores all project files and version history.

Repositories can be:

• Local Repository

• Remote Repository
      `,
    },


    {
      title: "Initializing a Git Repository",
      content: `
git init creates a new Git repository in the current folder.
      `,
      code: `mkdir MyProject

cd MyProject

git init`,
      language: "bash",
      output: `
Initialized empty Git repository
      `,
    },


    {
      title: "Git Repository Structure",
      content: `
After running git init, Git creates a hidden folder.

.git

This folder stores:

• Commit history

• Branch information

• Configuration

• References

Never delete the .git folder unless you want to remove Git tracking.
      `,
    },


    {
      title: "Cloning a Repository",
      content: `
git clone copies an existing repository from GitHub or another remote server.
      `,
      code: `git clone https://github.com/user/project.git`,
      language: "bash",
      output: "Repository cloned successfully",
    },


    {
      title: "Checking Repository Status",
      content: `
git status displays the current state of the repository.

It shows:

• Modified files

• New files

• Staged files

• Untracked files
      `,
      code: `git status`,
      language: "bash",
      output: `
On branch main

nothing to commit
      `,
    },


    {
      title: "Tracking Files",
      content: `
Git tracks files only after they are added.

States:

• Untracked

• Tracked

• Modified

• Staged

• Committed
      `,
    },


    {
      title: "Adding Files to Staging Area",
      content: `
git add moves files from the working directory to the staging area.
      `,
      code: `git add index.html`,
      language: "bash",
      output: "File staged",
    },


    {
      title: "Adding All Files",
      content: `
Stage every changed file in the project.
      `,
      code: `git add .`,
      language: "bash",
      output: "All files staged",
      tip: "Review changes with git status before committing.",
    },


    {
      title: "Creating a Commit",
      content: `
A commit saves the staged changes permanently into the repository.

Every commit should have a meaningful message.
      `,
      code: `git commit -m "Initial project setup"`,
      language: "bash",
      output: `
[main abc1234] Initial project setup
      `,
    },


    {
      title: "Viewing Commit History",
      content: `
git log displays the history of commits.

Information shown:

• Commit ID

• Author

• Date

• Commit message
      `,
      code: `git log`,
      language: "bash",
      output: `
commit abc1234
Author: Harish
Initial project setup
      `,
    },


    {
      title: "Short Commit History",
      content: `
Display a compact commit history.
      `,
      code: `git log --oneline`,
      language: "bash",
      output: `
abc1234 Initial project setup
def5678 Added README
      `,
    },


    {
      title: "Git Help",
      content: `
Git provides built-in documentation for every command.
      `,
      code: `git help

git help commit

git help status`,
      language: "bash",
      output: "Git help documentation opened",
      tip: "Use git help whenever you want to learn about a command in detail.",
    },
    {
      title: "Introduction to Branches",
      content: `
A branch is an independent line of development.

Branches allow developers to work on new features or bug fixes without affecting the main project.

Benefits:

• Parallel development

• Safe experimentation

• Easier collaboration

• Better project management
      `,
    },


    {
      title: "Default Branch",
      content: `
When a repository is created, Git creates a default branch.

Common default branch names:

• main

• master (older repositories)

Most modern repositories use "main".
      `,
    },


    {
      title: "Viewing Branches",
      content: `
Display all local branches in the repository.
      `,
      code: `git branch`,
      language: "bash",
      output: `
* main
      `,
    },


    {
      title: "Creating a New Branch",
      content: `
Create a new branch without switching to it.
      `,
      code: `git branch feature-login`,
      language: "bash",
      output: "Branch created successfully",
    },


    {
      title: "Switching Branches",
      content: `
Move from one branch to another.
      `,
      code: `git checkout feature-login`,
      language: "bash",
      output: "Switched to branch 'feature-login'",
    },


    {
      title: "Creating and Switching Branch",
      content: `
Create a branch and switch to it in one command.
      `,
      code: `git checkout -b feature-profile`,
      language: "bash",
      output: "Switched to a new branch 'feature-profile'",
      tip: "Modern Git also supports: git switch -c feature-profile",
    },


    {
      title: "Using git switch",
      content: `
git switch is a newer command for changing branches.
      `,
      code: `git switch main

git switch feature-login`,
      language: "bash",
      output: "Branch switched successfully",
    },


    {
      title: "Renaming a Branch",
      content: `
Rename the current branch.
      `,
      code: `git branch -m new-feature`,
      language: "bash",
      output: "Branch renamed",
    },


    {
      title: "Deleting a Branch",
      content: `
Delete a branch after it has been merged.
      `,
      code: `git branch -d feature-login`,
      language: "bash",
      output: "Deleted branch feature-login",
    },


    {
      title: "Force Deleting a Branch",
      content: `
Delete a branch even if it has unmerged changes.
      `,
      code: `git branch -D feature-login`,
      language: "bash",
      output: "Branch force deleted",
      tip: "Use -D carefully because unmerged work may be lost.",
    },


    {
      title: "Viewing All Branches",
      content: `
Show both local and remote branches.
      `,
      code: `git branch -a`,
      language: "bash",
      output: `
* main
  feature-login
  remotes/origin/main
      `,
    },


    {
      title: "Git Merge",
      content: `
Merge combines changes from one branch into another.

Usually:

1. Switch to main

2. Merge feature branch
      `,
      code: `git checkout main

git merge feature-login`,
      language: "bash",
      output: "Merge completed successfully",
    },


    {
      title: "Fast-Forward Merge",
      content: `
A Fast-Forward merge happens when no divergent commits exist.

Git simply moves the branch pointer forward.
      `,
    },


    {
      title: "Three-Way Merge",
      content: `
A Three-Way Merge occurs when both branches contain different commits.

Git creates a new merge commit automatically.
      `,
    },


    {
      title: "Merge Conflicts",
      content: `
A merge conflict occurs when the same part of a file is modified in different branches.

Git cannot automatically determine which change to keep.

Developers must manually resolve the conflict.
      `,
    },


    {
      title: "Resolving Merge Conflicts",
      content: `
Steps:

1. Open conflicting file.

2. Remove conflict markers.

3. Save the file.

4. Stage the file.

5. Commit the merge.
      `,
      code: `git add .

git commit -m "Resolved merge conflict"`,
      language: "bash",
      output: "Conflict resolved",
    },


    {
      title: "Git Diff",
      content: `
git diff shows differences between files or commits.
      `,
      code: `git diff`,
      language: "bash",
      output: "Modified lines displayed",
    },


    {
      title: "Comparing Branches",
      content: `
Compare changes between two branches.
      `,
      code: `git diff main feature-login`,
      language: "bash",
      output: "Branch differences displayed",
    },


    {
      title: "Git Restore",
      content: `
git restore discards changes in the working directory.
      `,
      code: `git restore index.html`,
      language: "bash",
      output: "File restored",
    },


    {
      title: "Git Reset",
      content: `
git reset moves HEAD to another commit.

Types:

• Soft Reset

• Mixed Reset

• Hard Reset
      `,
    },


    {
      title: "Soft Reset",
      content: `
Soft reset removes commits but keeps staged changes.
      `,
      code: `git reset --soft HEAD~1`,
      language: "bash",
      output: "Commit removed, changes staged",
    },


    {
      title: "Mixed Reset",
      content: `
Mixed reset removes commits and unstages changes.

This is the default reset mode.
      `,
      code: `git reset HEAD~1`,
      language: "bash",
      output: "Changes unstaged",
    },


    {
      title: "Hard Reset",
      content: `
Hard reset permanently removes commits and local changes.
      `,
      code: `git reset --hard HEAD~1`,
      language: "bash",
      output: "Repository restored",
      tip: "Use with caution because deleted work cannot be recovered easily.",
    },


    {
      title: "Git Revert",
      content: `
git revert creates a new commit that reverses the changes of an earlier commit.

Unlike reset, history is preserved.
      `,
      code: `git revert HEAD`,
      language: "bash",
      output: "Revert commit created",
    },


    {
      title: "Git Stash",
      content: `
git stash temporarily saves uncommitted changes.

Useful when switching branches quickly.
      `,
      code: `git stash`,
      language: "bash",
      output: "Changes saved to stash",
    },


    {
      title: "Viewing Stashes",
      content: `
Display all saved stashes.
      `,
      code: `git stash list`,
      language: "bash",
      output: `
stash@{0}
stash@{1}
      `,
    },


    {
      title: "Applying a Stash",
      content: `
Restore the latest stashed changes.
      `,
      code: `git stash apply`,
      language: "bash",
      output: "Stash applied",
    },


    {
      title: "Removing a Stash",
      content: `
Delete the latest stash after it is no longer needed.
      `,
      code: `git stash drop`,
      language: "bash",
      output: "Latest stash deleted",
    },


    {
      title: "Git Tags",
      content: `
Tags mark important points in project history.

They are commonly used for software releases.

Example:

v1.0

v2.0

v3.1
      `,
    },


    {
      title: "Creating a Tag",
      content: `
Create a lightweight tag.
      `,
      code: `git tag v1.0`,
      language: "bash",
      output: "Tag created",
    },


    {
      title: "Viewing Tags",
      content: `
Display all tags in the repository.
      `,
      code: `git tag`,
      language: "bash",
      output: `
v1.0
v2.0
      `,
    },


    {
      title: "Deleting a Tag",
      content: `
Remove a local tag.
      `,
      code: `git tag -d v1.0`,
      language: "bash",
      output: "Deleted tag 'v1.0'",
    },


    {
      title: "Git Cherry-pick",
      content: `
git cherry-pick copies a specific commit from one branch to another.

It is useful when only one commit is needed instead of merging an entire branch.
      `,
      code: `git cherry-pick abc1234`,
      language: "bash",
      output: "Commit applied successfully",
      tip: "Cherry-pick only when necessary to avoid duplicate history.",
    },
    {
      title: "Introduction to GitHub",
      content: `
GitHub is a cloud-based platform for hosting Git repositories.

It allows developers to:

• Store projects online

• Collaborate with teams

• Track issues

• Review code

• Manage software releases

GitHub is built on top of Git.
      `,
    },


    {
      title: "Creating a GitHub Account",
      content: `
To use GitHub:

1. Visit github.com

2. Click Sign Up

3. Enter your email

4. Create a username

5. Set a password

6. Verify your email

After registration, you can create repositories and collaborate with others.
      `,
    },


    {
      title: "Creating a GitHub Repository",
      content: `
A repository stores your project files and Git history.

Steps:

• Click New Repository

• Enter repository name

• Choose Public or Private

• Create repository
      `,
    },


    {
      title: "Public vs Private Repository",
      content: `
Public Repository:

• Visible to everyone

• Great for open-source projects


Private Repository:

• Accessible only to authorized users

• Suitable for personal or company projects
      `,
    },


    {
      title: "Connecting Local Repository to GitHub",
      content: `
Connect an existing local Git repository to GitHub using a remote URL.
      `,
      code: `git remote add origin https://github.com/username/myproject.git`,
      language: "bash",
      output: "Remote repository added",
    },


    {
      title: "Viewing Remote Repositories",
      content: `
Display all configured remote repositories.
      `,
      code: `git remote -v`,
      language: "bash",
      output: `
origin  https://github.com/username/myproject.git (fetch)

origin  https://github.com/username/myproject.git (push)
      `,
    },


    {
      title: "Changing Remote URL",
      content: `
Update the remote repository URL if it changes.
      `,
      code: `git remote set-url origin https://github.com/username/newproject.git`,
      language: "bash",
      output: "Remote URL updated",
    },


    {
      title: "Removing a Remote",
      content: `
Remove a configured remote repository.
      `,
      code: `git remote remove origin`,
      language: "bash",
      output: "Remote removed",
    },


    {
      title: "Pushing Code to GitHub",
      content: `
git push uploads local commits to the remote repository.
      `,
      code: `git push origin main`,
      language: "bash",
      output: "Changes pushed successfully",
    },


    {
      title: "First Push to GitHub",
      content: `
For the first push, set the upstream branch.
      `,
      code: `git push -u origin main`,
      language: "bash",
      output: "Branch linked with remote",
      tip: "After using -u once, future pushes only require git push.",
    },


    {
      title: "Pulling Changes",
      content: `
git pull downloads and merges the latest changes from the remote repository.
      `,
      code: `git pull origin main`,
      language: "bash",
      output: "Repository updated",
    },


    {
      title: "Fetching Changes",
      content: `
git fetch downloads changes without merging them.

This lets you inspect updates before applying them.
      `,
      code: `git fetch origin`,
      language: "bash",
      output: "Latest changes fetched",
    },


    {
      title: "Difference Between Pull and Fetch",
      content: `
git fetch:

• Downloads changes

• Does not merge automatically


git pull:

• Downloads changes

• Automatically merges them
      `,
    },


    {
      title: "Cloning a GitHub Repository",
      content: `
git clone creates a complete copy of a remote repository on your computer.
      `,
      code: `git clone https://github.com/username/project.git`,
      language: "bash",
      output: "Repository cloned",
    },


    {
      title: "Forking a Repository",
      content: `
A fork creates your own copy of another user's repository.

Forking is commonly used for contributing to open-source projects.
      `,
    },


    {
      title: "Keeping a Fork Updated",
      content: `
Sync your fork with the original repository.

Steps:

• Add upstream remote

• Fetch updates

• Merge changes
      `,
      code: `git remote add upstream https://github.com/original/project.git

git fetch upstream

git merge upstream/main`,
      language: "bash",
      output: "Fork synchronized",
    },


    {
      title: "Pull Requests",
      content: `
A Pull Request (PR) is a request to merge changes into another branch.

A PR allows:

• Code review

• Discussion

• Testing

• Approval before merging
      `,
    },


    {
      title: "Creating a Pull Request",
      content: `
Steps:

1. Push your branch

2. Open GitHub

3. Click Compare & Pull Request

4. Add title and description

5. Submit Pull Request
      `,
    },


    {
      title: "Reviewing Pull Requests",
      content: `
Reviewers can:

• Read code

• Suggest improvements

• Approve changes

• Request modifications

This improves code quality before merging.
      `,
    },


    {
      title: "Merging Pull Requests",
      content: `
After approval, the Pull Request can be merged.

Merge options:

• Create Merge Commit

• Squash and Merge

• Rebase and Merge
      `,
    },


    {
      title: "GitHub Issues",
      content: `
Issues are used to track:

• Bugs

• Feature requests

• Tasks

• Improvements

Each issue can be assigned to team members.
      `,
    },


    {
      title: "Issue Labels",
      content: `
Labels organize issues.

Examples:

• bug

• enhancement

• documentation

• help wanted

• good first issue
      `,
    },


    {
      title: "GitHub Discussions",
      content: `
GitHub Discussions provide a place for community conversations.

They are useful for:

• Questions

• Ideas

• Announcements

• General discussions
      `,
    },


    {
      title: "GitHub Wiki",
      content: `
A GitHub Wiki stores project documentation.

Common uses:

• Installation guide

• API documentation

• Tutorials

• User manuals
      `,
    },


    {
      title: "GitHub Releases",
      content: `
Releases package important versions of your software.

They usually include:

• Version number

• Release notes

• Downloadable files
      `,
    },


    {
      title: "Creating a Release",
      content: `
A release is typically created from a Git tag.

Example:

Version 1.0

Version 2.0
      `,
    },


    {
      title: "GitHub Pages",
      content: `
GitHub Pages hosts static websites directly from a repository.

Common uses:

• Portfolio websites

• Documentation

• Project demos

• Landing pages
      `,
    },


    {
      title: "README File",
      content: `
README.md is the main documentation file for a repository.

It usually contains:

• Project description

• Installation steps

• Usage instructions

• Features

• License
      `,
    },


    {
      title: "LICENSE File",
      content: `
A LICENSE file defines how others can use your project.

Popular licenses:

• MIT License

• Apache License 2.0

• GPL License

• BSD License
      `,
    },


    {
      title: "CONTRIBUTING.md",
      content: `
CONTRIBUTING.md explains how others can contribute to your project.

It may include:

• Coding standards

• Pull Request process

• Branch naming

• Testing guidelines
      `,
    },


    {
      title: "GitHub Best Practices",
      content: `
Professional GitHub practices:

✓ Write meaningful commit messages

✓ Keep README updated

✓ Use feature branches

✓ Review Pull Requests

✓ Use Issues for tracking

✓ Create releases

✓ Protect important branches
      `,
      tip: "A well-maintained GitHub repository improves collaboration and showcases professionalism.",
    },
    {
      title: "Advanced Git Introduction",
      content: `
Advanced Git provides powerful tools for managing complex projects and collaborating with teams.

Topics include:

• Git Workflows

• .gitignore

• Rebase

• Squash

• Git Hooks

• Aliases

• Submodules

• Git LFS

• Semantic Versioning

• Best Practices
      `,
    },


    {
      title: "Git Workflow",
      content: `
A Git workflow defines how developers collaborate on a project.

Popular workflows:

• Centralized Workflow

• Feature Branch Workflow

• Git Flow

• Forking Workflow

• Trunk-Based Development
      `,
    },


    {
      title: "Feature Branch Workflow",
      content: `
Each new feature is developed in a separate branch.

Steps:

1. Create a branch

2. Develop the feature

3. Commit changes

4. Push the branch

5. Create a Pull Request

6. Merge into main
      `,
    },


    {
      title: "Git Flow Workflow",
      content: `
Git Flow is a branching model for larger projects.

Main branches:

• main

• develop

Supporting branches:

• feature

• release

• hotfix
      `,
    },


    {
      title: ".gitignore File",
      content: `
The .gitignore file tells Git which files or folders should not be tracked.

Common examples:

• node_modules/

• .env

• *.log

• dist/

• build/
      `,
      code: `node_modules/
.env
dist/
*.log`,
      language: "text",
      output: "Ignored files configured",
    },


    {
      title: "Why Use .gitignore?",
      content: `
Benefits:

• Keeps repositories clean

• Prevents sensitive data from being committed

• Reduces repository size

• Avoids tracking generated files
      `,
    },


    {
      title: "Git Rebase",
      content: `
git rebase moves commits from one branch onto another.

It creates a cleaner commit history compared to merge.
      `,
      code: `git checkout feature-login

git rebase main`,
      language: "bash",
      output: "Branch rebased successfully",
    },


    {
      title: "Merge vs Rebase",
      content: `
Merge:

• Preserves complete history

• Creates merge commits


Rebase:

• Creates a linear history

• Rewrites commit history

Choose based on your team's workflow.
      `,
    },


    {
      title: "Interactive Rebase",
      content: `
Interactive rebase allows editing commit history.

You can:

• Rename commits

• Reorder commits

• Remove commits

• Squash commits
      `,
      code: `git rebase -i HEAD~4`,
      language: "bash",
      output: "Interactive rebase started",
    },


    {
      title: "Git Squash",
      content: `
Squashing combines multiple commits into a single commit.

Useful before creating a Pull Request.
      `,
      code: `git rebase -i HEAD~3`,
      language: "bash",
      output: "Commits squashed",
      tip: "Keep commit history clean by squashing minor or fix-up commits.",
    },


    {
      title: "Git Hooks",
      content: `
Git Hooks are scripts that run automatically before or after Git events.

Examples:

• pre-commit

• commit-msg

• pre-push

• post-merge
      `,
    },


    {
      title: "Pre-Commit Hook",
      content: `
A pre-commit hook runs before a commit is created.

Common uses:

• Code formatting

• Linting

• Running tests
      `,
    },


    {
      title: "Git Aliases",
      content: `
Aliases create shortcuts for Git commands.

They save time when using frequently executed commands.
      `,
      code: `git config --global alias.st status

git config --global alias.co checkout

git config --global alias.br branch`,
      language: "bash",
      output: "Aliases configured",
    },


    {
      title: "Using Git Aliases",
      content: `
After creating aliases:

git st

works like:

git status
      `,
      code: `git st`,
      language: "bash",
      output: "Repository status displayed",
    },


    {
      title: "Git Submodules",
      content: `
Submodules allow one Git repository to include another repository.

Useful for:

• Shared libraries

• External dependencies

• Reusable components
      `,
    },


    {
      title: "Adding a Submodule",
      content: `
Add another Git repository as a submodule.
      `,
      code: `git submodule add https://github.com/user/library.git`,
      language: "bash",
      output: "Submodule added",
    },


    {
      title: "Updating Submodules",
      content: `
Download the latest submodule changes.
      `,
      code: `git submodule update --init --recursive`,
      language: "bash",
      output: "Submodules updated",
    },


    {
      title: "Git Large File Storage (Git LFS)",
      content: `
Git LFS manages large files efficiently.

Examples:

• Videos

• Images

• Datasets

• Design files

Instead of storing large files directly, Git stores references.
      `,
    },


    {
      title: "Installing Git LFS",
      content: `
Initialize Git Large File Storage.
      `,
      code: `git lfs install`,
      language: "bash",
      output: "Git LFS initialized",
    },


    {
      title: "Tracking Large Files",
      content: `
Track specific file types using Git LFS.
      `,
      code: `git lfs track "*.psd"

git lfs track "*.zip"`,
      language: "bash",
      output: "Large files tracked",
    },


    {
      title: "Semantic Versioning",
      content: `
Semantic Versioning follows the format:

MAJOR.MINOR.PATCH

Example:

1.0.0

2.3.5

3.1.0

Meaning:

MAJOR → Breaking changes

MINOR → New features

PATCH → Bug fixes
      `,
    },


    {
      title: "Branch Naming Best Practices",
      content: `
Use meaningful branch names.

Examples:

feature/login-page

bugfix/navbar

hotfix/payment-error

docs/readme-update
      `,
    },


    {
      title: "Commit Message Best Practices",
      content: `
Write clear and descriptive commit messages.

Good examples:

Add login page

Fix navbar responsiveness

Update README

Avoid vague messages like:

Update

Changes

Fix
      `,
    },


    {
      title: "Repository Organization",
      content: `
A professional repository should include:

README.md

LICENSE

.gitignore

src/

docs/

tests/

assets/
      `,
    },


    {
      title: "Code Review Best Practices",
      content: `
During code review:

• Keep Pull Requests small

• Review code carefully

• Test before merging

• Provide constructive feedback

• Approve only after verification
      `,
    },


    {
      title: "Resolving Large Merge Conflicts",
      content: `
Tips:

• Pull frequently

• Commit regularly

• Work on small features

• Communicate with teammates

• Resolve conflicts early
      `,
    },


    {
      title: "Backing Up Repositories",
      content: `
Always keep repositories backed up.

Methods:

• Push to GitHub

• Mirror repositories

• Clone backups

• Export releases
      `,
    },


    {
      title: "Professional Git Best Practices",
      content: `
✓ Commit frequently

✓ Write meaningful commit messages

✓ Use Pull Requests

✓ Review code

✓ Keep branches short-lived

✓ Delete merged branches

✓ Never commit passwords or API keys

✓ Keep repositories organized
      `,
      tip: "Following Git best practices improves collaboration, code quality, and project maintainability.",
    },
    {
      title: "Git Collaboration",
      content: `
Git makes collaboration simple by allowing multiple developers to work on the same project.

Collaboration Process:

• Clone Repository

• Create Branch

• Make Changes

• Commit Changes

• Push Branch

• Create Pull Request

• Review Code

• Merge Changes
      `,
    },


    {
      title: "Working in a Team",
      content: `
Professional teams follow these practices:

• Pull latest changes before starting work

• Create a separate branch for every feature

• Write meaningful commit messages

• Review Pull Requests carefully

• Resolve merge conflicts early
      `,
    },


    {
      title: "Open Source Contributions",
      content: `
Open source projects allow anyone to contribute.

Typical contribution process:

1. Fork the repository

2. Clone your fork

3. Create a feature branch

4. Make changes

5. Commit changes

6. Push your branch

7. Open a Pull Request
      `,
    },


    {
      title: "GitHub Actions",
      content: `
GitHub Actions is GitHub's automation platform.

It automates tasks such as:

• Running tests

• Building applications

• Deploying projects

• Sending notifications
      `,
    },


    {
      title: "CI/CD Basics",
      content: `
CI/CD stands for:

CI → Continuous Integration

CD → Continuous Delivery / Continuous Deployment

Benefits:

• Faster development

• Automatic testing

• Reliable deployments

• Reduced manual work
      `,
    },


    {
      title: "Workflow File",
      content: `
GitHub Actions workflows are stored inside:

.github/workflows/

Each workflow is written using YAML.
      `,
      code: `name: Build

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest`,
      language: "yaml",
      output: "Workflow Created",
    },


    {
      title: "SSH Authentication",
      content: `
SSH allows secure communication between your computer and GitHub.

Benefits:

• No password required after setup

• More secure than HTTPS passwords

• Easier authentication
      `,
    },


    {
      title: "Generating SSH Keys",
      content: `
Generate a new SSH key pair.
      `,
      code: `ssh-keygen -t ed25519 -C "your_email@example.com"`,
      language: "bash",
      output: "SSH Key Generated",
      tip: "Upload the public key to your GitHub account before using SSH URLs.",
    },


    {
      title: "Testing SSH Connection",
      content: `
Verify that GitHub recognizes your SSH key.
      `,
      code: `ssh -T git@github.com`,
      language: "bash",
      output: `
Hi username!
You've successfully authenticated.
      `,
    },


    {
      title: "Personal Access Tokens (PAT)",
      content: `
GitHub uses Personal Access Tokens instead of passwords for many Git operations over HTTPS.

A PAT can be used to:

• Push code

• Pull repositories

• Access GitHub APIs
      `,
    },


    {
      title: "Git Security Best Practices",
      content: `
Keep repositories secure by following these guidelines:

• Never commit passwords

• Never commit API keys

• Use .gitignore

• Enable Two-Factor Authentication

• Rotate access tokens regularly

• Review repository permissions
      `,
    },


    {
      title: "Recovering Lost Commits",
      content: `
Git stores references to previous commits.

Useful commands:

• git reflog

• git log

• git reset

These commands can help recover lost work.
      `,
      code: `git reflog`,
      language: "bash",
      output: "Reference log displayed",
    },


    {
      title: "Git Reflog",
      content: `
git reflog records every movement of HEAD.

It is extremely useful for recovering deleted or lost commits.
      `,
      code: `git reflog

git reset --hard HEAD@{2}`,
      language: "bash",
      output: "Repository restored",
    },


    {
      title: "Git Interview Questions",
      content: `
Common interview questions:

• What is Git?

• What is GitHub?

• Difference between Git Fetch and Git Pull?

• Difference between Merge and Rebase?

• What is HEAD?

• What is Staging Area?

• Explain Git Workflow.

• What is Cherry-pick?

• What is Git Stash?

• What is a Pull Request?
      `,
    },


    {
      title: "Real-World Git Workflow",
      content: `
Example workflow:

1. Pull latest changes

2. Create feature branch

3. Write code

4. Commit changes

5. Push branch

6. Create Pull Request

7. Review code

8. Merge Pull Request

9. Delete feature branch
      `,
    },


    {
      title: "Common Git Mistakes",
      content: `
Avoid these mistakes:

• Committing directly to main

• Large commits

• Poor commit messages

• Forgetting to pull latest changes

• Ignoring merge conflicts

• Committing sensitive information
      `,
    },


    {
      title: "Professional Git Tips",
      content: `
Tips for professional development:

✓ Commit small changes

✓ Push regularly

✓ Keep repositories clean

✓ Use meaningful branch names

✓ Review Pull Requests

✓ Document your projects

✓ Use releases for versions
      `,
    },


    {
      title: "Git Project Ideas",
      content: `
Practice Git using projects:

• Personal Portfolio

• To-Do App

• Calculator

• Weather App

• Blog Website

• Chat Application

• E-Commerce Website

• Student Management System
      `,
    },


    {
      title: "Git Career Roadmap",
      content: `
Learning Path:

1. Git Basics

2. Branching

3. GitHub

4. Pull Requests

5. Advanced Git

6. GitHub Actions

7. CI/CD

8. Team Collaboration

9. Open Source Contributions

10. DevOps Tools
      `,
    },


    {
      title: "Git Cheat Sheet",
      content: `
Frequently used commands:

git init

git clone

git status

git add .

git commit -m "message"

git push

git pull

git fetch

git branch

git checkout

git merge

git rebase

git stash

git tag

git log
      `,
    },


    {
      title: "Complete Git Course Summary",
      content: `
Congratulations!

You have completed the Git & GitHub course.

Topics covered:

✓ Git Fundamentals

✓ Version Control

✓ Repositories

✓ Commits

✓ Branches

✓ Merging

✓ GitHub

✓ Pull Requests

✓ Issues

✓ Releases

✓ GitHub Pages

✓ Rebase

✓ Git Hooks

✓ Git LFS

✓ GitHub Actions

✓ CI/CD

✓ SSH

✓ Git Security

✓ Collaboration

✓ Interview Preparation

✓ Professional Workflow

You are now ready to use Git and GitHub confidently in personal, academic, and professional software development projects.
      `,
      tip: "The best way to master Git is by using it daily. Create projects, contribute to open source, and collaborate with others.",
    },


  ],
};