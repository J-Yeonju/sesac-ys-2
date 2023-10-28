const mysql = require("mysql")

// createConnection : mysql 연결 정보를 받아서 mysql과 연결
// db 연결한다 > host, user, password, database 이름
// conn 객체로 ...날릴 수 있다.
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234qwer$',
    database: 'db_visitor'
})

// exports.getVisitor = () => {
//     return [
//         {id: 1, username: "홍길동", Comment: "내가 왔다." },
//         {id: 2, username: "조연주", Comment: "내가 왔다22" }
//     ];
// };

//정의
// sql날리고 콜백 날리고 
// 콜백함수를 매개변수로 받도록...
exports.getVisitor = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err, rows)=>{
        // err 변수가 빈값이 아니라면, err가 발생했다는 것.
        if (err) {
            throw err;
        }
        // 위에를 무사히 넘으면 성공 -> rows 두번째 매개변수에 성공을 받는디
        console.log("visitor", rows);
        cb(rows);
    });
};

exports.insertVisitor = (data, cb) => {
    // insert into visitor (username, comment) values ('????', '?????')
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;
  
    conn.query(sql, (err, result) => {
      // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
      if (err) {
        throw err;
      }
  
      console.log("visitor insert", result);
      cb(result.insertId);
    });
  };


exports.delVisitor = (id, cb) => { 
    const sql = `delete from visitor where id = ${id}`;

    conn.query(sql, (err, result) => {
        if(err){
            throw err;
        }

        let flag = false;
        if (result.affectedRows) {
            flag = true;
        }

        console.log("visitor delete", result);
        cb(flag);
        //         cb(true));
    })
}