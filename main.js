const $color = document.querySelector('.color')
const $button = document.querySelector('button')
const $p = document.querySelector('p')

const colorcode = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const onClickButton = function() {
  let colornum = []
  let colorstr = ''
  for (let i = 0; i < 6; i++) {
    colornum.push(colorcode[Math.floor(Math.random() * 16)] )
  }
  colorstr = '#' + colornum.join('')
  $p.textContent = colorstr;
  console.log(typeof colorstr, colorstr)
  document.querySelector('body').style.backgroundColor = colorstr;
}

$button.addEventListener('click', onClickButton)