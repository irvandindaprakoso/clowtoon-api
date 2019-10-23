
const models = require('../models')
const EpisodeDetail = models.episode_details

exports.read = (req, res) => {
    EpisodeDetail.findAll({
        where:{
            episode_id:req.params.episode_id,
            webtoon_id:req.params.webtoon_id
        }
    }).then(episode_detail=>{
        res.send({episode_detail})
    })
}

exports.store = (req, res) => {
    EpisodeDetail.create(req.body).then(episode_detail=>{
        if(episode_detail){
            res.send({
                message:'Success added Image',
                episode_detail
            })
        }else{
            return res.send({
                message:'Error to add Image',
            })
        }
    })
}

exports.remove= (req, res) => {
    EpisodeDetail.destroy({where:{
        id:req.params.id,
        episode_id:req.params.episode_id,
        webtoon_id:req.params.webtoon_id,
        
    }}).then(episode_detail=>{
        if(episode_detail){
            res.send({
                message:'Success delete image',
                episode_details
            })
        }else{
            return res.send({
                message: "Error to delete image",
            })
        }
    })
}