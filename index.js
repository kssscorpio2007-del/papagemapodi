const imagesArray = [
        '/img/bird.png',
        '/img/skaut.jpg',
        '/img/orig.jpg'
    ];

    let imageIndex = 0;

    document.getElementById('main_button').addEventListener('click', () => {
        const imgElement = document.getElementById('golub_img');
        
        
        imgElement.src = imagesArray[imageIndex++];
        
        
        if(imageIndex === imagesArray.length) {
            imageIndex = 0;
        }
    });
