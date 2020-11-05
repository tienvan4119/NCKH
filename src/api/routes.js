import {Router} from 'express'

import destinationRoutes from './modules/destinations/routes'
const routes = Router()
routes.use('/destinations', destinationRoutes)
export default routes