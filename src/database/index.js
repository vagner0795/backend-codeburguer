import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import Products from '../apps/models/Products'
import User from '../apps/models/User'
import Category from '../apps/models/Category'

// import configDatabase from '../config/database'

const models = [User, Products, Category]
class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:6icbGsMUdOFET44TLFJU@containers-us-west-180.railway.app:7637/railway'
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    mongoose.set('strictQuery', false)
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:CZoKy25A9wG0WfVwnj6F@containers-us-west-58.railway.app:7712',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
