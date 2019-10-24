'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episode_details', [
      {
        page: 1,
        image:'https://3.bp.blogspot.com/-qADLy7CuzOA/WxDYligwubI/AAAAAAAAEQI/FsrFykf7H3IfXFQVmRX_6tUl7Xlxw0jWwCLcBGAs/s1600/01.png',
        episode_id: 16,
        webtoon_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 2,
        image:'https://vignette.wikia.nocookie.net/onepiece/images/8/88/Killer_Manga_Post_Timeskip_Infobox.png/revision/latest?cb=20190325163002',
        episode_id: 16,
        webtoon_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 3,
        image:'https://i.pinimg.com/736x/b9/17/9a/b9179a4e34ede1fa2b0eb676209a567e.jpg',
        episode_id: 16,
        webtoon_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 1,
        image:'https://d1m6vmmwsgiy3l.cloudfront.net/media/Releases/34657/34657-1118248.jpg',
        episode_id: 16,
        webtoon_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 2,
        image:'https://www.rightstufanime.com/images/productImages/9781421533056_manga-Naruto-47-sample4.jpg',
        episode_id: 16,
        webtoon_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 3,
        image:'https://i.pinimg.com/736x/cf/11/7a/cf117a720d436b3cd9cc92bb5f610b47.jpg',
        episode_id: 16,
        webtoon_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 1,
        image:'https://pm1.narvii.com/6931/f2cf96eaf1d8cc8c7776cd4818cdf8aa952a4f2dr1-875-1300v2_hq.jpg',
        episode_id: 16,
        webtoon_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 2,
        image:'https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/4/47/Escanor_preparing_his_attacking_on_Galan.png/revision/latest?cb=20160412004513',
        episode_id: 16,
        webtoon_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        page: 3,
        image:'https://i.pinimg.com/originals/75/82/d4/7582d4467e55b88f6fd8d00bc75dbd66.png',
        episode_id: 16,
        webtoon_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode_details', null, {});    

  }
};
