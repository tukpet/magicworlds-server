import { Router, Request, Response } from 'express'

 const router = Router()

 const name = 'Magic Worlds Server'
 const packageVersion = '1.0.0-pre-beta'

 router.get('/', (_req: Request, res: Response) => {
   res.status(200).json({
     name,
     version: packageVersion,
   })
 })

 export const PingRoute = router