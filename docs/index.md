# Documentation Home Page

Welcome to the Team 30's documentation website. If you are new to this repo, please read the [New Developer Guide](new-developer-guide.md) first.

## Starting the Client

1. Run the commands below in a terminal to start a React client.

   ```
   cd client
   npm start
   ```

2. Navigate to http://localhost:3000 to view the client.

3. Make code changes to files under client/src

4. Refresh the page to see your changes. Hot reload (reloading using ctrl + r or cmd + r) is enabled.

## Starting the Server

1. Run the commands below to start an appengine server.

   ```
   # Builds a production build of the client code.
   cd client
   npm run build

   # Copies the client code into a development server.
   cd ../server
   mvn appengine:devserver
   ```

2. Navigate to http://localhost:8080 which will show the client hooked up to a server.

3. Note hot reload is not enabled on server development since Java is a compile-time language.

## Deploy

```
# Production build of client
cd client
npm run build

# Production build of server + deployment
cd ../server
mvn appengine:update
```
