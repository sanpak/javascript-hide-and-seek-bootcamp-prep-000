function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}
function deepestChild(){
  var selectorArray = document.getElementById('grand-node').querySelectorAll('div');
  for (var i = 0; i < selectorArray.length; i++){}

  return selectorArray[i-1];
}
function increaseRankBy(n){
  var rankedList = document.querySelectorAll('ul.ranked-list li');
  for(var i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}
