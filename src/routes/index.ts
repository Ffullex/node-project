import { Router } from 'express';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExampleRoutes from './ExampleRoutes';


// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

// Init router
const userRouter = Router();
const exampleRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

// Get all examples
exampleRouter.get(Paths.Examples.Get, ExampleRoutes.getAll);
exampleRouter.post(Paths.Examples.Add, ExampleRoutes.add);
exampleRouter.put(Paths.Examples.Update, ExampleRoutes.update);
exampleRouter.delete(Paths.Examples.Delete, ExampleRoutes.delete);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);

// Add ExampleRouter
apiRouter.use(Paths.Examples.Base, exampleRouter);


// **** Export default **** //

export default apiRouter;
