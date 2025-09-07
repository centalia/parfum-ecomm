import '@/styles/scss/main.scss';
import '@/components/header/header.scss';

document.querySelector('#header').innerHTML = 
`
    <div class="header">
        <div class="header-container">
            <nav class="nav__list">
                <ul class="nav__list-left">
                    <li class="nav__list-item">Shop</li> 
                    <li class="nav__list-item">About</li>
                </ul>
                <div class="brand"></div>
                <ul class="nav__list-right">
                    <li class="nav__list-item">Blog</li> 
                    <li class="nav__list-item">Contact</li>
                    <li class="nav__list-item"><img src="/src/assets/svg/icon_shopping_bag.svg"></img></li>
                </ul>
            </nav>
        </div>
    </div>

` 