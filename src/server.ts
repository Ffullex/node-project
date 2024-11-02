import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import express, { Request, Response, NextFunction, Application } from "express";
import EnvVars from "@src/common/EnvVars";

import "express-async-errors";
import { NodeEnvs } from "@src/common/misc";

import ExampleService from "./services/ExampleService";

// **** Variables **** //
import Server from './index'

const app: Application = express()
const server: Server = new Server( app )
const PORT: number = process.env.PORT ? parseInt( process.env.PORT, 10 ) : 8080

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan("dev"));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}


// Add error handler
app
  .listen( PORT, 'localhost', function () {
    console.log( `Server is running on port ${ PORT }.` )
  } )
  .on( 'error', ( err: any ) => {
    if ( err.code === 'EADDRINUSE' ) {
      console.log( 'Error: address already in use' )
    } else {
      console.log( err )
    }
  } )


// **** Front-End Content **** //

// Set views directory (html)
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);

// Set static directory (js and css).
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

// Nav to users pg by default
app.get("/", (_: Request, res: Response) => {
  return res.redirect("/examples");
});

// Redirect to login if not logged in.
app.get("/users", (_: Request, res: Response) => {
  return res.sendFile("users.html", { root: viewsDir });
});

// Redirect to login if not logged in.
app.get("/examples", async (_: Request, res: Response) => {
  return res.end(JSON.stringify(await ExampleService.getAll()))
});

