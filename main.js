// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('201811189').querySelector('.like').addEventListener('click', e => {
  mimicServerCall()
  .then(r => changeHeart(document.getElementById('201811189').querySelector('.like-glyph')))
  .catch(error => {
    document.querySelector('#modal').classList.remove('hidden');
    setTimeout(() => {document.querySelector('#modal').classList.add('hidden')}, 3000)
  })
});

function changeHeart(heart){
  if (heart.innerText === EMPTY_HEART){
    heart.innerText = FULL_HEART;
    heart.classList.add('activated-heart');
  } else if (heart.innerText === FULL_HEART){
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  } else{
    return;
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}