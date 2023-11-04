const { User } = require("../model")
// visitor 객체가 필요. 객체분해해서 가져온다. 

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors => 기존 방명록 전체 조회 후 render ("visitor")
exports.visitor = (req, res) => {
    //정보를 인자로 넘김다. .. 전체 조회할 거니까 인자 없음 
    // select * from visitor;
    Visitor.findAll().then((result) => {
        console.log("findAll result: ", result);
        console.log("0 index의 username: ", result[0].dataValues.username); // dataValues는 생략해도 됨. 그냥 시퀄라이즈 문법이 그래요
        // 기대 : [{id:, username:, comment}, {id:, username:, comment}]
        res.render("visitor", {data : result})
    })
    
    // Visitor.findAll({
    //     where: {username:"yeonju"}
    // })   
};

// then 방법
// // POST /visitor => 방명록 insert
// exports.postVisitor = (req, res) => {
//   const data = {
//     username: req.body.username,    // 키는 컬럼 정보 (존재하는 정보)
//     comment: req.body.comment
//   }
//   Visitor.create(data).then((result)=>{
//     console.log("create result: ", result);
//     res.send(result);
//   })
//   .catch((err)=> {
//     console.log(err);
//     res.status("오류 발생")
//   })
//   };


// async await 방법
// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    username: req.body.username,    // 키는 컬럼 정보 (존재하는 정보)
    comment: req.body.comment
  }
  const createVisitor = await Visitor.create(data).catch((err)=> {});
  res.send(createVisitor);
};




// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result)=> {
    console.log("destroy result: ", result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // select * from visitor where id = ?? limit 1;
  Visitor.findOne({         //조건을 건다 - 객체 안에 걸어준다.
    where: {                            //where의 값도 객체 안에
        id: req.params.id,
    }
  }).then((result)=> {
    console.log("findOne result: ", result);
    res.send(result);
  })
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {                          //body에 있는 값을 받아서
    username: req.body.username,   
    comment: req.body.comment
  };
  // update visitor set username='??', comment='??' where id = ?;
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result)=>{
    console.log("update result: ", result);
    res.send({result: true});
  })
};

exports.getTest = (req, res) => {
  // select username from visitor where id = 9 order by username ASC
  Visitor.findAll({
    attribute: ["username", "id"],
    // where: {
    //   id: req.params.id,
    // },
    order: [["username", "ASC"]],
  }).then((result)=> {
    console.log("findOne result: ", result);
    res.send(result);
  });
};