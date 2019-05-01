# Project Zeedonk

## Setup
1. [Install npm](https://www.npmjs.com/get-npm). This is a package manager
we use to run react on our client.

2. [Install maven](https://maven.apache.org/install.html). This is what we use
to compile the server.

3. [Install JDK 1.8.202+](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). This is used to compile the java.

## Client Local Development
1. Run the commands below to start a development server.
```
cd client
npm start
```

2. Navigate to http://localhost:3000 to view the client.

3. Make changes to javascript files in client/src

4. Refresh the page to see your changes. Hot reload is enabled.

## Server Local Development
1. Run the commands below to start a development server.
```
npm run build
mvn appengine:devserver
```

2. Navigate to http://localhost:8080 which will show the client hooked up to a server.

3. Note hot reload is not enabled on server development since Java needs to be compiled.

## Deploy

??