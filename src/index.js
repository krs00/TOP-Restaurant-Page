import { home } from "./components/home";
import { heroes } from "./components/heroes";
import { villians } from "./components/villians"; 


const main = document.getElementById('main')

function tabSwitch(e) {
  main.innerHTML = ""
  
  const clickedTab = e.target.id

  if (clickedTab === 'home') {
    main.appendChild(home()) 
  }

  if (clickedTab === 'heroes') {
    main.appendChild(heroes()) 
  }
 
  if (clickedTab === 'villians') {
    main.appendChild(villians()) 
  }
}

const menuBtns = document.querySelectorAll('.menu-btn')

menuBtns.forEach((btn) => {
  btn.addEventListener('click', tabSwitch)
})


main.appendChild(home()) 

