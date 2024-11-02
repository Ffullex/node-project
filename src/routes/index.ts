import { Router } from 'express';
import { Application } from 'express'

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExampleRoutes from './ExampleRoutes';


// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

// Init router
const exampleRouter = Router();


// Get all examples
exampleRouter.get(Paths.Examples.Get, ExampleRoutes.getAll);
exampleRouter.post(Paths.Examples.Add, ExampleRoutes.add);
exampleRouter.put(Paths.Examples.Update, ExampleRoutes.update);
exampleRouter.delete(Paths.Examples.Delete, ExampleRoutes.delete);

// Add ExampleRouter
apiRouter.use(Paths.Examples.Base, exampleRouter);


// **** Export default **** //
export default class Routes {
  constructor( app: Application ) {
    app.use( '/api/users', UserRoutes )
    app.use( '/api/examples', exampleRouter )
  }
}
