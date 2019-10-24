'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: "ep.1",
        cover_image:'http://www.4usky.com/data/out/67/164597834-one-piece-wallpapers.jpg',
        webtoon_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ep.1",
        cover_image:'https://3.bp.blogspot.com/-Tl6npnJCG8A/XEpt67IwK1I/AAAAAAAAGqI/Uhb9j4NriNc3d_3MRVLWG52fcme7Asr4gCHMYCw/s1600/hd-naruto-wallpaper-for-mobile-and-desktop.jpg',
        webtoon_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ep.1",
        cover_image:'https://i.ytimg.com/vi/Sbz6aQtW5B8/maxresdefault.jpg',
        webtoon_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});    
    
  }
};
