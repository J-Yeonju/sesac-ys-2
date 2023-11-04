const Sequelize = require("sequelize");         // 모듈 자체를 불러온
const config = require("../config/config.json")["development"];  // 컨피그를 불러와서 거기에 있는 환경을 사용하겠다. 



// config =  {
//     "host": "localhost",
//     "database": "db_visitor",
//     "username": "user'",
//     "password": "1234qwer$",
//     "dialect": "mysql"
// }

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// Sequelize 객체를 만든다. 

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize: Sequelize }
// db는 빈 객체로 만들어졌다가 할당을 한 순간 위처럼 바뀐다. 

// const Visitor = require("./Visitor")
// db.Visitor = Visitor(sequelize, Sequelize)


db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);
// 함수
// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체를 담음


// db.User = require("./User")(sequelize, Sequelize);

module.exports = db; // 위의 db객체를 이용하겠다. 