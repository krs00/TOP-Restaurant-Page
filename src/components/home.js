export function home() {

  const container = document.createElement('div')
  container.classList.add('content-wrapper') 
  container.id = "content-home" 
 
  container.appendChild(text1)
  container.appendChild(text2)
  container.appendChild(image)
  container.appendChild(text3) 
 
  return container
}


const text1 = document.createElement('p')
text1.innerText = 'EarthBound is a SNES game'

const text2 = document.createElement('p')
text2.innerText = 'It was released in 1994'

const text3 = document.createElement('p')
text3.innerText = 'It was developed by Ape Inc. and HAL Laboratory'

const image = document.createElement('img')
image.src = 'src/images/Ness_clay.png'
image.classList.add = 'eb-img'

