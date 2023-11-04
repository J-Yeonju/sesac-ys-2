function Visitor(Sequelize, DataTypes) {
    return Sequelize.define(        
        "visitor",  
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,      
                primaryKey: true,  
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING(10),
            },
            comment: {
                type: DataTypes.TEXT("medium"),   
            }
            
        },     
        {
            tableName: "visitor",
            freezeTableName: true, 
            timestamps: false,        
        }
    );  


}

module.exports = Visitor; 

