import '@/styles/scss/main.scss';
import '@/components/banner/banner.scss';

document.querySelector('#banner').innerHTML = 
`
    <div class="banner-container"> 
        <div class="banner-container__text">
            <p class="text">Just Restocked | Shop Our Fragrance Collection</p>
        </div>
        <div class="banner-container__icon-cancel"></div>
        <img src="/src/assets/svg/icon_cancal.svg"></img>
    </div>
`