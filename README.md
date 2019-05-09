# Team 30

## Setup
1. [Install npm](https://www.npmjs.com/get-npm). This is a package manager
we use to install react and node on our machines.

2. [Install maven](https://maven.apache.org/install.html). This is what we use
to compile the server.

3. [Install JDK 1.8.202+](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). This is used to compile the java.

4. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). This is used to grab the code repository into your computer.

5. Clone the repo using `git clone https://github.com/fluffysheep-codeu/Summer2019-Team30.git` in the command line. If you are using windows, then you might consider installing [Git bash](https://gitforwindows.org/) which allows you to run a Unix terminal.

## Client Local Development
1. Run the commands below in a terminal to start a react server.
```
cd client
npm start
```

2. Navigate to http://localhost:3000 to view the client.

3. Make code changes to files under client/src

4. Refresh the page to see your changes. Hot reload (reloading using ctrl + r or cmd + r) is enabled.

## Server Local Development
1. Run the commands below to start an appengine server.
```
# Start from repo's top level directory.
cd client

# Builds a production build of the client code.
npm run build
cd ../server

# Copies the client code into a development server.
mvn appengine:devserver
```

2. Navigate to http://localhost:8080 which will show the client hooked up to a server.

3. Note hot reload is not enabled on server development since Java needs to be compiled.

## Deploy

??
