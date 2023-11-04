const {Visitor} = require("../model") 

exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
    Visitor.findAll().then((result) => {
        console.log("findAll result: ", result);
        console.log("0 index의 username: ", result[0].dataValues.username); 

        res.render("visitor", {data : result})
    })
    
};


exports.postVisitor = async (req, res) => {
  const data = {
    username: req.body.username,    
    comment: req.body.comment
  }
  const createVisitor = await Visitor.create(data).catch((err)=> {});
  res.send(createVisitor);
};


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


exports.getVisitorById = (req, res) => {
  Visitor.findOne({         
    where: {                          
        id: req.params.id,
    }
  }).then((result)=> {
    console.log("findOne result: ", result);
    res.send(result);
  })
};


exports.patchVisitor = (req, res) => {
  const data = {                          
    username: req.body.username,   
    comment: req.body.comment
  };
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

  Visitor.findAll({
    attribute: ["username", "id"],
    order: [["username", "ASC"]],
  }).then((result)=> {
    console.log("findOne result: ", result);
    res.send(result);
  });
};