const models = require('../models')
const User = models.users
const Webtoon = models.webtoons


exports.index= (req, res)=>{
    Webtoon.findAll().then(webtoons=>res.send(webtoons))
}

exports.favourite = (req, res)=>{
    Webtoon.findAll({
        where:{
            isFavourite:req.params.favourite
        }
    }).then(webtoons=>{
        res.send(webtoons)
    })
}

exports.title = (req, res) =>{
    Webtoon.findAll({
        where:{
            title:req.params.title
        }
    }).then(webtoons=>{
        res.send(webtoons)
    })
}

exports.store = (req, res)=>{
    Webtoon.create(
        req.body
        ).then(webtoons=>{
        res.send({
            message:"Success created webtoon",
            webtoons
        })
    })
}

exports.update = (req, res) => {
    // console.log(req.params)
    Webtoon.update(
        req.body,
        {where:{
            created_by:req.params.user_id,
            id:req.params.webtoon_id
        }
    }).then(webtoons=>{
        res.send({
            message:"Success updated webtoon",
            webtoons
        })
    })
}

exports.remove = (req, res)=> {
    Webtoon.destroy({
        where:{
            created_by:req.params.user_id,
            id:req.params.webtoon_id
        }
    }).then(webtoons=>{
        res.send({
            message: 'Success deleted webtoon',
            webtoons
        })
    })
}

exports.myWebtoonCreation= (req, res)=>{
    Webtoon.findAll({
        where:{
            created_by:req.params.user_id
        }
    }).then(webtoons=>res.send(webtoons))
}