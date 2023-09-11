import { createCard } from "./card";

export function heroes() {

  const container = document.createElement('div')
  container.classList.add('content-wrapper')
  container.id = "content-heroes" 

  const Ness = createCard('Ness', 'A kid from Onett', '', 'a picture of Ness')
  const Paula = createCard('Paula', 'A girl from Twoson', '', 'a picture of Paula')
  const Jeff = createCard('Jeff', 'A scientist from Winters', '', 'a picture of Jeff')
  const Poo = createCard('Poo', 'Prince of Dalaam', '', 'a picture of Poo')

  const cards = [Ness, Paula, Jeff, Poo]

 cards.forEach((card) => {
  container.appendChild(card) 
 }) 


 return container
}