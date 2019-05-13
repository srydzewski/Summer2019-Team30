## Overview

This guide is specific to Summer 2019 Team 30 as it uses a combination of technologies such as React, Redux, Protobuffs, Json, Maven + Google App Engine. The technologies we use are specific to modern day web development. Many of these tools have been developed to make web development significantly easier than using vanilla javascript. While we sacrifice setup and learning time to understand how to use each of these frameworks, the ultimate goal is to make our future development time significantly faster.

This project is split between server and client. Server refers to any code residing in the `//server folder` and client refers to any code residing in the `//client folder`. The `//` refers to the root folder which holds our repository aka `Summer2019-Team30`.

## Environment Setup for CodeU Students

If you are not a CodeU student, you can skip this section because it won't make sense.

You will need to be logged into your CodeU account to perform these steups.

1. Do the [Environment Setup](https://sites.google.com/codeustudents.com/summer2019/week0-codeu-project-setup/environment-setup)
2. Do not do [Github Repo Setup](https://sites.google.com/codeustudents.com/summer2019/week0-codeu-project-setup/github-repo-setup) and [App Engine Setup](https://sites.google.com/codeustudents.com/summer2019/week0-codeu-project-setup/app-engine-setup) since those tasks will be pre-setup for you.
3. [Optional] Do [Setup Confirmation](https://sites.google.com/codeustudents.com/summer2019/week0-codeu-project-setup/setup-confirmation-index-html). Instead of running `mvn appengine:devserver`, follow the commands on our [README.md](https://github.com/fluffysheep-codeu/Summer2019-Team30/blob/master/README.md). Our project uses slightly different technologies than the main project.

## Environment Setup for Non CodeU Students

If you are not a CodeU student and happen to stumble upon this repository then you should be able to read the [README.md](https://github.com/fluffysheep-codeu/Summer2019-Team30/blob/master/README.md) to setup your environment.

## Editor Setup

1. Our editor of choice is [VS Code](https://code.visualstudio.com/) because of the really nice extensions for react.
2. Please install these extensions in VS Code:

- `"Prettier - Code formatter"` by Esben Petersen.
- `"ES7 React/Redux/GraphQL/React-Native snippets"` by dsznajder
- `"Sublime Babel"` by Josh Peng
- [OPTIONAL] `"Monokai++"` by Davide Casella. This is just an editor theme to change the colors of VS Code.

3. Refer to the [README.md](https://github.com/fluffysheep-codeu/Summer2019-Team30/blob/master/README.md) for cloning the repo. "Cloning the repo/repository" means to get the code from Github on to your computer.

4. Add the root folder of the cloned repo to VS Code. `File -> Add Folder To Workspace -> Summer2019-Team30`.
5. Save the VS Project. `File -> Save Workspace As`. Navigate to the root directory `Summer2019-Team30` and add a new folder named `local`. It must be named `local` because our `.gitignore` will prevent the `local` folder from being pushed to our shared repository on Github. Save your workspace in the `local` folder. My workspace is just called `project.code-workspace`.
6. Turn format save on in VS Code. `Gear icon in the bottom left corner -> Settings -> Type "Format on Save" in the searchbar -> Click checkbox next to "Format on Save"`.
7. Turn on 80 character line vertical ruler. `Settings gear bottom left -> Settings -> Search "Editor: Rulers" -> Edit in settings.json -> Add "editor.rulers": [80] at the end`.

## Learning the Client

The client uses React, Redux, and Protobuffs (aka Protos). You will use Javascript, HTML, CSS. Don't worry if you don't know anything about them now, we will use Youtube to learn.

Watch [React + Redux Tutorial on Youtube by The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG). Typing the code while watching helps you remember it better. You can watch it at 2X speed because the tutorial is long.

Important Takeaways from the videos:

1. [Video #6](https://www.youtube.com/watch?v=-XQ2zCdxw0I&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=6) pay special attention to how you debug web applications. You can debug them directly through chrome because chrome has a debugger! React Dev Tools allows you to see the state of each react element on the page.
2. [Video #10](https://www.youtube.com/watch?v=5QwNCX3UbXc&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=11&t=0s) demonstrates how to run a terminal in VS Code. This is super useful so you don't have a bunch of terminals open.
3. [Video #34](https://www.youtube.com/watch?v=HKU24nY8Hsc&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=35&t=0s) is the start of Redux.

## Learning the Server

The server is compiled using maven and deployed to Google App Engine. The server can be deployed "headless", or no client ui attached to it. The server code generally handles any interaction with Google App Engine such as storing User data or redirect a user to a different web page based on some criteria.

TODO(brianch): Find resources that help with the server side learning.
