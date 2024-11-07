import express, { Application } from 'express'
import Routes from './routes'
import cookieParser from "cookie-parser";
import EnvVars from "@src/common/EnvVars";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config( app: Application ): void {
    app.use( express.json() )
    app.use( express.urlencoded( { extended: true } ) )
    app.use(cookieParser(EnvVars.CookieProps.Secret));
  }
}console.log(111222333)

import morgan from "morgan"
import path from "path"
import helmet from "helmet"
import { Request, Response } from "express"

import "express-async-errors"
import { NodeEnvs } from "@src/common/misc"

import ExampleService from "./services/ExampleService"


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

console.log(111222333)
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

