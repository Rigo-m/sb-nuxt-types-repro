import { defineHandler } from 'h3'
import config from '~/config/someConfig'


export default defineHandler((req, res) => {
  console.log(config)
  return 'Hello world!'
})