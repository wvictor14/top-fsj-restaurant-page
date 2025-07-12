import clearContent from './clearContent.js'

function loadAbout() {
  clearContent();

  const content = document.getElementById('content');
  const about = document.createElement('div');
  about.classList.add('headline');

  const h1 = document.createElement('h1');
  h1.textContent = 'The Full Story';
  about.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = "KA-DON is a welcoming restaurant where you can enjoy authentic unagi in a modern, homey environment. It is our pleasure to give you a memorable dining experience. By working with local farms, we focus on ethical practices and animal welfare, ensuring that our dishes are made with the highest quality ingredients";
  about.appendChild(p);

  content.appendChild(about);
}

export default loadAbout