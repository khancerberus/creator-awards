import { Sequelize } from 'sequelize'

const DATABASE_URL = import.meta.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'

export const sequelize = new Sequelize(DATABASE_URL)
