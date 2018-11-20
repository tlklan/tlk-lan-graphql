// @flow
import {Sequelize, sequelize} from '../db'

const Image = sequelize.define('image', {
  id: {type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING(255), allowNull: false},
  path: {type: Sequelize.STRING(255), allowNull: false},
  extension: {type: Sequelize.STRING(255), allowNull: false},
  filename: {type: Sequelize.STRING(255), allowNull: false},
  byteSize: {type: Sequelize.INTEGER(10).UNSIGNED, allowNull: false},
  mimeType: {type: Sequelize.STRING(255), allowNull: false},
  created: {type: Sequelize.DATE, allowNull: true, defaultValue: null},
},{
  freezeTableName: true,
  underscored: true,
  timestamps: false,
})

Image.sync({alter: false})

export default Image
