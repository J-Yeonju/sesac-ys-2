// CREATE TABLE customer 
// ( custid    CHAR(10) NOT NULL PRIMARY KEY,
//   custname  VARCHAR(10) NOT NULL, 
//   addr      CHAR(10) NOT NULL, 
//   phone     CHAR(11), 
//   birth     DATE 
// );

function Customer(Sequelize, DataTypes) {
    return Sequelize.define("customer", {
            custid: {
                type: DataTypes.STRING(10),
                allowNull: false,     
                primaryKey: true,  
                autoIncrement: true,
            },
            custname: {
                type: DataTypes.STRING(10),
                allowNull: false,   
            },
            addr: {
              type: DataTypes.STRING(10),
                allowNull: false,   
            },
            phone: {
              type: DataTypes.STRING(11),
              allowNull: false,   
            },
            birth: {
              type: DataTypes.DATE,
            },
        },  
        {
            tableName: "customer",
            freezeTableName: true,  
  
            timestamps: false,
  
        }
        );  
    }
  
  module.exports = Customer; 