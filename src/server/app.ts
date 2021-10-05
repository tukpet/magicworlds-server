import express, { Request, Response, NextFunction } from 'express'
import { PingRoute } from './routes/ping'

const app = express()

const noCache = (_req: Request, res: Response, next: NextFunction) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Expires: '0',
  })

  next()
}

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Cache-Control', 'public,s-maxage=60,max-age=20')
  next()
})

// Do not expose implementation details. Express server security best practices:
// https://expressjs.com/en/advanced/best-practice-security.html
app.disable('x-powered-by')

app.use('/ping', noCache, PingRoute)

app.use((_req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'public, max-age=10')
  res.status(404).send('Not found')
})

export const App = app
