## Overview

This guide is specific to Summer 2019 Team 30 as it uses a combination of technologies such as React, Redux, Protobuffs, Json, Maven + Google App Engine. The technologies we use are specific to modern day web development. Many of these tools have been developed to make web development significantly easier than using vanilla javascript. While we sacrifice setup and learning time to understand how to use each of these frameworks, the ultimate goal is to make our future development time significantly faster.

## Environment Setup for CodeU Students

If you are not a CodeU student, you can skip this section because it won't make sense.

You will need to be logged into your CodeU account to perform these steups.

1. Do the [Environment Setup](https://sites.google.com/codeustudents.com/summer-2019/week0-codeu-project-setup/environment-setup)

1a. [Install npm](https://www.npmjs.com/get-npm). This is a package manager we use to install react and node on our machines.

2. Do not do [Github Repo Setup](https://sites.google.com/codeustudents.com/summer-2019/week0-codeu-project-setup/github-repo-setup) and [App Engine Setup](https://sites.google.com/codeustudents.com/summer-2019/week0-codeu-project-setup/app-engine-setup) since those tasks will be pre-setup for you.

2a. Clone the repo using `git clone https://github.com/fluffysheep-codeu/Summer2019-Team30.git` in the command line. If you are using windows, then you might consider installing [Git bash](https://gitforwindows.org/) which allows you to run a Unix terminal.

3. Do [Setup Confirmation](https://sites.google.com/codeustudents.com/summer-2019/week0-codeu-project-setup/setup-confirmation-index-html) BUT for steps 1 & 2, follow the instructions on our [README.md](https://github.com/fluffysheep-codeu/Summer2019-Team30/blob/master/README.md). Our project uses a slightly different framework than the main project.

4. Skim through the entire website starting from the [CodeU toolbox](https://sites.google.com/codeustudents.com/summer-2019/codeu-toolbox). Skimming the website will give you a better understanding of what to expect in the next 10 weeks as well as what technical tools, resources, and guides are available to you.

## Editor Setup

1. Our editor of choice is [Visual Studio Code](https://code.visualstudio.com/) because of the really nice extensions for React.

2. Please install these extensions in VS Code:

   - "Prettier - Code formatter" by Esben Petersen.
   - "ES7 React/Redux/GraphQL/React-Native snippets" by dsznajder
   - "Sublime Babel" by Josh Peng
   - [OPTIONAL] "Monokai++" by Davide Casella

3. Refer to the [README.md](https://github.com/fluffysheep-codeu/Summer2019-Team30/blob/master/README.md) for cloning the repo. "Cloning the repo/repository" means to get the code from Github on to your computer.

4. Add the root folder of the cloned repo to VS Code.

   ```
   File -> Add Folder To Workspace -> Summer2019-Team30
   ```

5. Save the VS Project to the local directory. You may have to create a local directory.

   ```
   File -> Save Workspace As -> Summer2019-Team30/local/project.code-workspace
   ```

6. Turn format save on in VS Code.

   ```
   Settings -> Search "Format on Save" -> Check "Format on Save"
   ```

7. Turn on 80 character line vertical ruler.

   ```
   Settings -> Search "Editor: Rulers" -> Edit in settings.json

   // In settings.json add:
   "editor.rulers": [80]
   ```

## Running the Code

Refer to the instructions at [README.md](https://github.com/fluffysheep-codeu/Summer2019-Team30/blob/master/README.md).

## Learning the Client

The client uses React, Redux, and Protobuffs (aka Protos). You will use Javascript, HTML, CSS. Don't worry if you don't know anything about them now, we will use Youtube to learn.

Watch [React + Redux Tutorial on Youtube by The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG). Typing the code while watching helps you remember it better. You can watch it at 2X speed because the tutorial is long.

Important Takeaways from the videos:

1. [Video #6](https://www.youtube.com/watch?v=-XQ2zCdxw0I&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=6) pay special attention to how you debug web applications. You can debug them directly through chrome because chrome has a debugger! React Dev Tools allows you to see the state of each react element on the page.

2. [Video #10](https://www.youtube.com/watch?v=5QwNCX3UbXc&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=11&t=0s) demonstrates how to run a terminal in VS Code. This is super useful so you don't have a bunch of terminals open.

3. [Video #34](https://www.youtube.com/watch?v=HKU24nY8Hsc&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=35&t=0s) is the start of Redux.

## Learning the Server

The server is compiled using maven and deployed to Google App Engine. This project uses Java as its main server language. When looking up documentation, always remember to preface your search query with Java so that you get the most accurate results.

Google App Engine provides several layers of APIs and services that allows this project to scale. Please [watch this videp](https://youtu.be/ytT2-kL9v2o) to get a better understanding of what some of the APIs and services at our disposal. At a minimum, we will be using Datastore to store all data and Servlets to handle the requests from the client.

[Next read the Project Overview](overview.md)
