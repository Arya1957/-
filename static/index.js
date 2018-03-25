var searchContent = document.querySelector('#search-content') ;
var suggestion = document.querySelector('.suggestion');
searchContent.addEventListener('input',function(e){
  var value = searchContent.value;
  if(value){
  suggestion.classList.add('active');
  } else {
       suggestion.classList.remove('active');
  }
});
