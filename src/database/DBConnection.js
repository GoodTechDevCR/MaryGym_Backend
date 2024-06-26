import {createPool} from 'mysql2/promise'
import { 
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
 } from '../config/ConfiguracionInicial.js'

export const MySqlConnection = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME
})