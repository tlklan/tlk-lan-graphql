// @flow
import {Sequelize, sequelize} from '../db'

const CmsContent = sequelize.define('cms_content', {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nodeId: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false
  },
  modified: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  locale: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  heading: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  modifierId: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  css: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  url: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  pageTitle: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  breadcrumb: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  metaTitle: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  metaDescription: {
    type: Sequelize.STRING(255),
    allowNull: true
  },
  metaKeywords: {
    type: Sequelize.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'cms_content',
  timestamps: false,
})

CmsContent.sync({alter: false})

export default CmsContent
