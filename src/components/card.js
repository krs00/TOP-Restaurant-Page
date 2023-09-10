export function createCard(title, text, imageURL, alt) {
  // Create a <div> element for the card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  // Create an <h2> element for the title
  const titleElement = document.createElement('h2');
  titleElement.innerText = title;

  // Create a <p> element for the text
  const textElement = document.createElement('p');
  textElement.innerText = text;

  // Create an <img> element for the image
  const imageElement = document.createElement('img');
  imageElement.src = imageURL;
  imageElement.classList.add('card-img');

  // Set Alt tag
  cardDiv.setAttribute('alt', alt)

  // Append the title, text, and image elements to the card
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(imageElement);
  cardDiv.appendChild(textElement);

  // Return the created card element
  return cardDiv;
}
