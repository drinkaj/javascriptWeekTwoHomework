/*Name this external file gallery.js*/

function upDate(picture) {
    document.getElementById('image').innerHTML=picture.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + picture.src + "')";
}

function unDo() {
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML="Hover over an image below to display here.";
}