const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
  res.render("index");
};

// Visitor 에서 정의한 것을 사용
exports.visitor = (req, res) => {
//   const data = Visitor.getVisitors();
//   res.render("visitor", { data: data });
    Visitor.getVisitor((rows)=>{
        res.render("visitor", { data: rows });
    })
};


// POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body)
  Visitor.insertVisitor(req.body, (id)=>{
    console.log("ctrl postVisitor ", id);
    res.send({
      ...req.body,
      id
    });
  });
};


// DELETE / visitor/:id => 방명록 삭제 
exports.deleteVisitor = (req, res) => {
  console.log(req.params); 
  Visitor.delVisitor(req.params.id, (result)=> {
    res.send({ result: result });
  })
}