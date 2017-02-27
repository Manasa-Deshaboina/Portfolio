
var divs = document.getElementsByTagName('div');

for(var i=0; i<divs.length; i++) {
  divs[i].onclick = function(e) {
    e = e || event
    var target = e.target || e.srcElement
    this.style.backgroundColor='yellow'
    console.log("target = "+target.className+", this="+this.className)
    this.style.backgroundColor = ''
  }