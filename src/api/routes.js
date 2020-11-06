import {Router} from 'express'

import destinationRoutes from './modules/destinations/routes'
import postRoutes from './modules/posts/routes'
import commentRoutes from './modules/comments/routes'
import propertyRoutes from './modules/properties/routes'
const routes = Router()
routes.use('/destinations', destinationRoutes)
routes.use('/posts', postRoutes)
routes.use('/comments', commentRoutes)
routes.use('/properties', propertyRoutes)
export default routes