function toggleVisibility(id) {
    var images = document.querySelectorAll('.image-container img');
    images.forEach(function(image) {
        if (image.id === id) {
            image.style.visibility = 'visible';
        } else {
            image.style.visibility = 'hidden';
        }
    });


    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        if (description.id === id + '-description') {
            description.style.visibility = 'visible';
        } else {
            description.style.visibility = 'hidden';
        }
    });

    var descriptions = document.querySelectorAll('.description-container');
    descriptions.forEach(function(description) {
        if (description.id === id + '-description') {
            description.style.visibility = 'hidden';
        } else {
            description.style.visibility = 'visible';
        }
    });
    
}

let activeButton = null;

function setActiveButton(button) {
    if (activeButton !== null) {
        activeButton.style.backgroundColor = ''; 
        activeButton.style.color = '';
    }
    activeButton = button;
    activeButton.style.backgroundColor = '#99947e'; 
    activeButton.style.color = '#eeece3';
}


function openNav() {
    document.getElementById("sidebar").style.width = "235px";
    
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    
  }

  var audio1 = new Audio('audio/linear2.wav'); 
  var releaseAudio1 = new Audio('audio/linear3.wav');
  var audio2 = new Audio('audio/tactile2.wav'); 
  var releaseAudio2 = new Audio('audio/tactile3.wav');
  var audio3 = new Audio('audio/clicky4.wav'); 
  var releaseAudio3 = new Audio('audio/clicky3.wav');

  function changeImage() {
    var image = document.getElementById('firstImage');
    image.src = 'images/red2.png';
    audio1.play(); 
  }
  
  function restoreImage() {
    var image = document.getElementById('firstImage');
    image.src = 'images/red1.png';
    releaseAudio1.play(); 
  }

  
  function changeImage2() {
    var image = document.getElementById('secondImage');
    image.src = 'images/brown2.png';
    audio2.play();
  }
  
  function restoreImage2() {
    var image = document.getElementById('secondImage');
    image.src = 'images/brown1.png';
    releaseAudio2.play(); 
  }

  function changeImage3() {
    var image = document.getElementById('thirdImage');
    image.src = 'images/blue2.png';
    audio3.play(); 
  }
  
  function restoreImage3() {
    var image = document.getElementById('thirdImage');
    image.src = 'images/blue1.png';
    releaseAudio3.play(); 
  }