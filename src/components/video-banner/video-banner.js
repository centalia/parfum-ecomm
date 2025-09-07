import '@/styles/scss/main.scss';
import '@/components/video-banner/video-banner.scss';

document.querySelector('#video-banner').innerHTML = 
`
    <div class="video-banner-container">
        <img src='/src/assets/img/video-banner.jpg'></img>
        <div class="video-banner">
            <div class=video-banner__text>
                <p class="video-banner__text-normal">Elevate <span class="video-banner__text-italic">everyday</span></p>
                <p class="video-banner__text-normal">moments to</p> 
                <p class="video-banner__text-italic">extraordinary.</p>
            </div>
            <button class="video-banner__btn">
                <p class="video-banner__btn-text">
                    Shop our fragrances
                </p>
            </button>
        </div>
    </div>
`