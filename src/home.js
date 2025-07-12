import clearContent from './clearContent.js'

function pageLoad() {
  clearContent();
  
  const content = document.getElementById('content');
  const headline = document.createElement('div');
  headline.classList.add('headline');

  const headline_h1 = document.createElement('h1');
  headline_h1.textContent = 'A fake tonkatsu restaurant';
  headline.appendChild(headline_h1);

  const headline_p = document.createElement('p');
  headline_p.textContent = 'SAKU Katsu is a sophisticated restaurant offering authentic katsu in a modern ambiance, providing guests with a meaningful dining experience. Furthermore, we partner with local farms to prioritize ethical practices and animal welfare, ensuring that our dishes are crafted with premium ingredients.';
  headline.appendChild(headline_p);

  content.appendChild(headline);

}

export default pageLoad