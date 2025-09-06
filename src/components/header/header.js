import '@/styles/scss/main.scss';
import '@/components/header/header.scss';

document.querySelector('#header').innerHTML = 
`
    <div class="header-container">
        <ul class="nav-left">
            <li class="nav-item">SHOP</li> 
            <li class="nav-item">ABOUT</li>
        </ul>
        <div class="brand"></div>
        <ul class="nav-right">
            <li class="nav-item">BLOG</li> 
            <li class="nav-item">CONTACT</li>
            <li class="nav-item"><img src="/src/assets/svg/icon_shopping_bag.svg"></img></li>
        </ul>
    </div>
` 