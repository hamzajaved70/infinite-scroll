const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

const count = 10;
const apiKey = 'dzj1t8SOHWM5vf2dN0as5oVCis4ApHdd3ivC4r4vlm0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper func to set attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash api
        const item = document.createElement('a');
        //item.setAttribute('href', photo.links.html);
        //item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        //img.setAttribute('src', photo.urls.regular);
        //img.setAttribute('alt', photo.alt_description);
        //img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a> and put inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    }); 
}

// Get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error
    }
}

getPhotos();