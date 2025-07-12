import "./styles.css";
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadAbout from './about.js'

const homeBtn = document.querySelector('button.home');
homeBtn.addEventListener('click', loadHome);

const menuBtn = document.querySelector('button.menu');
menuBtn.addEventListener('click', loadMenu);

const aboutBtn = document.querySelector('button.about');
aboutBtn.addEventListener('click', loadAbout);