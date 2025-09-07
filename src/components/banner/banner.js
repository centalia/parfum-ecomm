import '@/styles/scss/main.scss';
import '@/components/banner/banner.scss';

document.querySelector('#banner').innerHTML = 
`
    <div class="banner-container"> 
        <p class="banner-container__text">Just Restocked | Shop Our Fragrance Collection</p>
        <img class="banner-container__icon-cancel" src="/src/assets/svg/icon_cancal.svg"></img>
    </div>
`