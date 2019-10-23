const models = require('../models')
const Episode = models.episodes

exports.index=(req, res)=>{
    Episode.findAll({
        where:{
            webtoon_id:req.params.webtoon_id
        }
    }).then(episodes=>{
        res.send({episodes})
    })
}

exports.store = (req, res) => {
    Episode.create(
        req.body
    ).then(episodes => {
        if(episodes){
            res.send({
                message: 'Success created episode',
                episodes
            })
        }else{
            return res.send({
                message: 'Error to create episode',
            })
        }        
    })
}

exports.update = (req, res) => {
    Episode.update(
        req.body,
        {where:{
            webtoon_id:req.params.webtoon_id,
            id:req.params.episode_id
        }}
    ).then(episode=>{
        if(episode){
            res.send({
                message:'Success updated episode',
                episode
            })
        }else{
            return res.send({
                message:'Error to update episode'
            })
        }
        
    })
}

exports.remove = (req, res) => {
    Episode.destroy({where:{
        webtoon_id:req.params.webtoon_id,
        id:req.params.episode_id
    }}).then(episode=>{
        if(episode){
            res.send({
                message:'Success deleted episode',
                episode
            })
        }else{
            return res.send({
                message:'Error to delete episode'
            })
        }
        
    })
}
