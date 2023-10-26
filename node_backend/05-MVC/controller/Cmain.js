// function (req, res) {
//     res.render("index");
// }
// ↓ 위에 코드는 아래 코드로

const {commentInfos} = require("../model/Comment")


exports.main = (req, res) => {
    res.render("index");
}

exports.comments = (req, res) => {
    const commentData = commentInfos();
    // commentDate = [
    //     {
    //         id: 1,  
    //         userid: "yeonju", 
    //         date: "2023-10-26", 
    //         comment: "hello" 
    //     },
    //     {
    //         id: 2,  
    //         userid: "ham", 
    //         date: "2023-10-28", 
    //         comment: "hello ham" }
    // ]
    res.render("comments", {
        commentInfos: commentData,
    });
}
