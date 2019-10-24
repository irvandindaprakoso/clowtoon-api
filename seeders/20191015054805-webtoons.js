'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'One Piece',
        genre:'action',
        isFavourite: true,
        url: 'https://cdn.vox-cdn.com/thumbor/7TzXXGeyMRbOjKE7UDiNXOHlQK0=/0x0:1280x738/1200x800/filters:focal(538x267:742x471)/cdn.vox-cdn.com/uploads/chorus_image/image/65232906/one_piece.0.png',
        created_by: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Naruto',
        genre:'action',
        isFavourite: true,
        url: 'https://i.pinimg.com/originals/49/2a/23/492a2318346694e8aa786d2a80e6ba33.jpg',
        created_by: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
,
      {
        title: 'Nanatsu no Taizai',
        genre:'action',
        isFavourite: true,
        url: 'https://gcube.id/wp-content/uploads/2018/09/gcube-ngr-nanatsu-no-taizai-featured-image-799x500.jpg',
        created_by: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
