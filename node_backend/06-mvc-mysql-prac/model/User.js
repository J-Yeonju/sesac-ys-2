const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234qwer$',
    database: 'db_mvc_prac'
});

exports.post_signup = (data, cb) => {
    const sql = `insert into user (userid, name, pw) values ('${data.userid}','${data.name}','${data.pw}');`

    cnn.query(sql, (err, result)=>{
        if(err) {
            throw err;
        }

        cb(result.insertId);
    })
};

exports.post_signin = (data, cb) => {
    // select  
    // data = {userid, pw} (post요청으로 data로 넘겨줌)
    // sql은 특정 조건을 걸어서 검색 가능하므로 for문x
    // select에 조건을 걸어서 검색하자

    const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`
    cnn.query(sql, (err, rows)=>{
        // rows.length == 0 이런 회원 없다. 
        if(err)    {
            throw err
        }
        cb(rows)
    })   //커넥트를 이용해서 쿼리를 날린다. rows는 값이 있는 지 다 조회한다. 
};


exports.get_user = (id, cb) => {
    const sql = `select * from user where id = ${id}`;
    cnn.query(sql, function (err, rows) {
        if (err) throw err
        cb(rows)
    })
};

exports.update_profile = (data, cb) => {
    // const sql
    const sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`
    cnn.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      cb();         // 인자x 매개변수 없으니까
    });
};


exports.delete_user = (id, cb) => {
    const sql = `DELETE FROM user WHERE id='${id}'`;
    cnn.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        cb();
    });
};