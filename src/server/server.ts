import { App } from './app'

 const port = 60606

 App.listen(port, () => {
   // eslint-disable-next-line no-console
   console.log(`Server listening at ${port}`)
 })