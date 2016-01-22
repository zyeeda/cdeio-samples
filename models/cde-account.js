export default (sequelize, DataTypes) => {
  return sequelize.define('Account', {
    id: {type: DataTypes.STRING, primaryKey: true, field: 'f_id'},
    name: {type: DataTypes.STRING, field: 'f_realname'},
    mobile: {type: DataTypes.STRING, field: 'f_mobile'},
    password: {type: DataTypes.FLOAT, field: 'f_password'},
    account_name: {type: DataTypes.STRING, field: 'f_account_name'}
  }, {
    timestamps: false,
    tableName: 'CDE_ACCOUNT'
  })
}
