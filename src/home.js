import clearContent from './clearContent.js'

function loadHome() {
  clearContent();

  const content = document.getElementById('content');
  const headline = document.createElement('div');
  headline.classList.add('headline');

  const headline_h1 = document.createElement('h1');
  headline_h1.textContent = 'The best UNAGI-DON restaurant';
  headline.appendChild(headline_h1);

  const headline_p = document.createElement('p');
  headline_p.textContent = 'KA-DON is an elegant restaurant offering original unagi-DON in a modern ambiance, providing customers with a insightful dining experience. We partner with local farmers and ethical practices with animal welfare, ensuring that our dishes are conceived with high-quality ingredients.';
  headline.appendChild(headline_p);

  content.appendChild(headline);

}

export default loadHome