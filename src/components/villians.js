import { createCard } from "./card";

export function villians() {

  const container = document.createElement('div')
  container.classList.add('content-wrapper') 
  container.id = "content-villians"

  const Ant = createCard('Titanic Ant', 'Guardian of Giant Step', '', 'a picture of Ness')
  const Mole = createCard('Mondo Mole', 'Guardian of Lilliput Steps', '', 'a picture of Paula')
  const Sprout = createCard('Trillionage Sprout', 'Guardian of the Milky Well', '', 'a picture of Jeff')
  const Shroom = createCard('A Giant Shroom', 'Guardian of Rainy Circle', '', 'a picture of Poo')
  const Rat = createCard('Plague Rat of Doom', 'Guardian of Magnet Hill', '', 'a picture of Poo')
  const Storm = createCard('Thunder and Storm', 'Guardians of the Pink Cloud', '', 'a picture of Poo')
  const Electro = createCard('Electro Specter', 'Guardian of Lumine Hall', '', 'a picture of Poo')
  const Dog = createCard('Carbon Dog', 'Guardian of Fire Spring', '', 'a picture of Poo')

  const cards = [Ant, Mole, Sprout, Shroom, Rat, Storm, Electro, Dog]

 cards.forEach((card) => {
  container.appendChild(card)
 }) 

 
 return container
}