const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = process.env.PORT || 4000

app.use(bodyParser.json())

// Controllers
const WebtoonsController = require('./controllers/webtoons')
const EpisodesController = require('./controllers/episodes')
const DetailEpisodeController = require('./controllers/episode_detail')
const AuthController = require('./controllers/auth')

// Middleware
const { authenticated } = require('./middleware')

app.get('/', (req, res) => {
    res.send('Sukses')
})
app.group('/api/v1', (router)=>{

    // User
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    // WEBTOONS 
    router.get('/webtoons',WebtoonsController.index)
    router.get('/user/:user_id/webtoons', authenticated, WebtoonsController.index)
    router.get('/webtoon/favourites/:favourite', authenticated, WebtoonsController.favourite)
    router.get('/webtoon/title/:title',WebtoonsController.title)
    // WEBTOON EDIT 
    router.patch('/user/:user_id/webtoon/:webtoon_id',authenticated, WebtoonsController.update)
    // WEBTOON DELETE 
    router.delete('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonsController.remove)
    // WEBTOON CREATE 
    router.post('/user/:id/webtoon',authenticated, WebtoonsController.store)
    

    // EPISODE 
    router.get('/webtoon/:webtoon_id/episodes',EpisodesController.index)
    router.get('/webtoon/:webtoon_id/episodes/:episode_id',DetailEpisodeController.read)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes', authenticated, EpisodesController.index)
    router.get('/user/:user_id/webtoon/:webtoon_id/episodes',authenticated,EpisodesController.index)
    // EPISODE CREATE 
    router.post('/user/webtoon/:webtoon_id/episode',authenticated, EpisodesController.store)
    // EPISODE UPDATE 
    router.patch('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id',authenticated, EpisodesController.update)
    // EPISODE DELETE 
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodesController.remove)


    // EPISODE DETAIL 
    router.get('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images',authenticated, DetailEpisodeController.read)
    // EPISODE DETAIL CREATE
    router.post('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image',authenticated, DetailEpisodeController.store)
    // EPISODE DETAIL DELETE
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:id', authenticated, DetailEpisodeController.remove)  

}),

app.listen(port, () => console.log(`Listening on port ${port}!`))
