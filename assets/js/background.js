var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

$('#allrows').css({background: 'url(assets/img/background/' + images[Math.floor(Math.random() * images.length)] + ') '});