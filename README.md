# UBC Messaging App

## Overview
A full-stack chat application based on the popular "chat server" concept. Front-end designed with React, and backend with Django + SQLite.

## User Stories
- I want to have my account info saved when logged out and revisit content from last session when logged in
- I want to have different chat streams I can switch between
- I want to be able to add and delete chat streams
- I want to manage users in servers
- I want to be able to check user status
- I want to be able to add and remove users from the chat
- I want to be able to log in and log out of the application with my account
- I want my account information to be secure (outsiders cannot access my login id or password)
- I want to be able to friend other accounts
- I want to be able to see a list of accounts that I have friended
- I want to be able to send and receive messages from other accounts that I have friended
- I want to be able to search for potential friends via username
- I want to be able to see live chat updates when someone sends a message
- I want to be able to see a history of my chat with a friend
- I want to be able to see notifications when the app is offline
- I want to be able to differentiate between messages I send and messages I receive
- I want to be able to unsend messages
- I want to be able to block accounts
- I want blocked accounts to be unable to access my account profile and messages

## Contribution Guide
- **NEVER** push directly to main, create a new branch and open up a PR
  - PRs should be reviewed by others then merged (request for review in discord)
- **One** feature per branch/PR - to keep PR reviews clear and reduce merge conflicts
- Accept PRs as soon as possible and pull from main **frequently**
- **Avoid** basing new branches off of other branches, unless the it is a small change (consult in discord)
- Delete unused branches

**PRs that do not comply with project structure, is messy, or too complex will be rejected** (leon please)

## Project Structure
- React components -> component folder -> organize by functionality
- Global style: index.css
- CSS -> modules.css
- Radix-UI (headless, unopinionated), Ant Design UI
- Styles -> ‘styles’ folder, use css modules
- Pages -> ‘pages’ folder
- Images -> ‘assets’ folder (if not work put in ‘public’ folder)

## TODO
See project tab.
