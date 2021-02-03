// // this is the code which will be injected into a given page...
//
// (function() {
//
// 	// just place a div at top right
// 	var div = document.createElement('div');
// 	div.textContent = 'Injected!';
// 	document.body.appendChild(div);
//
// 	alert('inserted self... giggity');
//
// })();
// console.log(window.location.href)
if (window.location.href.includes('youtube') && window.location.href.includes('watch')) {
  const className = 'more-button';
  let hidden = false;
  // console.log('iets');
  let counter = 0;
  // console.log(className);
  // console.log(document.getElementsByClassName(className));
  // console.log(document.getElementsByTagName('yt-formatted-string'));
  // const b = document.getElementsByTagName('yt-formatted-string');
  // for (var i = 0; i < b.length; i++) {
  //   console.log(b[1])
  // }
  if (!hidden) {
    const videoElement = document.querySelector('video');
    // videoElement.onplay = () => {console.log('unpaused')};
    videoElement.addEventListener('progress', a, false);
  }
  // const timeout = setTimeout(searchButton,4000);
  // document.getElementsByClassName(className)[0].addEventListener('click',hideSongsList);
} else {
  // console.log('anders')
}
function a(){
  // console.log('progress');
  console.log(document.getElementsByClassName('more-button'));
  if(document.getElementsByClassName('more-button').length > 0){
    hidden = true;
    // console.log('bru')
    document.querySelector('video').removeEventListener('progress',a,false)
    // console.log(document.getElementsByClassName('more-button')[0])
    document.getElementsByClassName('more-button')[0].addEventListener('click',b,false);
  }
}
function b() {
  // console.log('adsfasd')
  // document.querySelector('video').addEventListener('progress',c,false);
  // console.log(document.querySelector('#collapsible'));
  document.querySelector('#collapsible').style.display = 'none';
  // console.log(document.getElementsByClassName('less-button')[0])
}
// function c() {
//   console.log('progress')
//   document.querySelector('#collapsible').style.display = 'none';
//
// }
// function searchButton() {
//   console.log('timeout')
//   const a = document.getElementsByTagName('yt-formatted-string');
//   console.log(a)
//   for (var i = 0; i < a.length; i++) {
//     if(a[i].classList.contains('more-button')){
//     a[i].addEventListener('click', () => {
//       console.log('hideSongsList');
//       console.log(document.getElementById('collapsible'));
//       },false);
//     }
//   }
// }
// function hideSongsList(){
//   console.log('hideSongsList');
//   console.log(document.getElementById('collapsible'));
//   // document.getElementById('collapsible').style.display = 'none';
// }

// alert("s")
