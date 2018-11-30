// @flow
import {Sequelize, sequelize} from '../db'

const CmsNode = sequelize.define('cms_node', {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated: {
    type: Sequelize.DATE,
    allowNull: true
  },
  parentId: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    defaultValue: '0'
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  level: {
    type: Sequelize.STRING(255),
    allowNull: false,
    defaultValue: 'page'
  },
  published: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '1'
  },
  deleted: {
    type: Sequelize.INTEGER(4),
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'cms_node',
  timestamps: false,
})

CmsNode.sync({alter: false})

export default CmsNode
