import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`
            <section class="video">
                <div class="video__holder">
                    <video controls width="250">
                        <source class="video__content">
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
                <p class="video__title">title</p>
            </section>`);
        const videoElement = this.element.querySelector('.video__content');
        videoElement.src = url;
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
}