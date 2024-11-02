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
}