// @flow
import {Sequelize, sequelize} from '../db'

const CmsAttachment = sequelize.define('cms_attachment', {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  nodeId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false
  },
  filename: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  extension: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  mimeType: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  byteSize: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false
  }
}, {
  tableName: 'cms_attachment',
  timestamps: false,
})

CmsAttachment.sync({alter: false})

export default CmsAttachment
