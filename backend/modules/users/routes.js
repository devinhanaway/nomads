import {Router} from "express"
import * as userController from './controller'

const userRouter = new Router()

userRouter.post('/users', userController.signup)
userRouter.get('/users', userController.getUsers)


export default userRouter
