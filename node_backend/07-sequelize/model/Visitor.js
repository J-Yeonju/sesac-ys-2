// 테이블의 구조를 정의
// orm은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정리할 필요가 있다. 

function Visitor(Sequelize, DataTypes) {
    return Sequelize.define(         //모델(테이블) 정의, sequelize 객체가 define 메소드를 이용해서, 3개의 인자가 들어간다.
        "visitor",   //테이블 이름...   함수  
        {
            id: {
                // int not null auto_increment primary key,
                type: DataTypes.INTEGER,
                allowNull: false,       //true 가 기본값이다. 
                primaryKey: true,  //false 가 기본값이다. 
                autoIncrement: true,
            },
            username: {
                // varchar(10)
                type: DataTypes.STRING(10),
                // allowNull: true,
            },
            comment: {
                // mediumtext
                type: DataTypes.TEXT("medium"),
                // allowNull: true,
                
            }
            
        },     //컬럼 정의 ... 실제 컬럼의 이름을 키로 
        {
            tableName: "visitor",
            freezeTableName: true,  //테이블네임을 고정시키겠다. 
            // Sequelize에서 간혹 단수로 지젖ㅇ해둔 테이블 이름을 SQL문을 날릴 때 복수로 변경 시키는 경우가 있다.
            // insert into Visitor ~~ => create() => insert into visitors ~~~  이걸 방지하는 게 freezeTableName
            timestamps: false,
            // insert, update 시에 그 시간을 자동으로 저장하겠다. (createAt, updateAt.....(이런 컬럼을 만들어 놓지 않았다.))-> 기본값
            // 저장하지마! => false로 지정            
        }
    );  


}

module.exports = Visitor;  // 하나의 함수

// define 메소드를 이용해서 table을 정의 = 모델정의