var currentColor = 'red'

var changeColor = setInterval(function() {
  if (currentColor=='red') {
    currentColor = 'blue'
  } else { currentColor = 'red' }
    document.getElementsByTagName('body')[0].style='background-color:' + currentColor;
  }, 1000)

setTimeout(function () {
  clearInterval(changeColor)
}, 10000)
