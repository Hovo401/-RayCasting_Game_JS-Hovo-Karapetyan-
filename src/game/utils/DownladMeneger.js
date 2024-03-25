import SceneMeneger from "../scene/SceneMeneger.js";


export default class DownladMeneger {
    constructor() {
        if (DownladMeneger.es) {
            return DownladMeneger.es;
        }
        DownladMeneger.es = this;

        this.images = SceneMeneger.images;

        this.totalImages = 0;
        this.imagesLoaded = 0;


        this.onProgress = null;
        this.onComplete = null;
    }
    
    addImage({key, src}) {
        this.totalImages++;
        const image = new Image();
        this.images[key] = image;
        image.onload = () => {
            this.imagesLoaded++;
            if (this.onProgress) {
                this.onProgress(this.imagesLoaded, this.totalImages);
            }
            if (this.imagesLoaded === this.totalImages && this.onComplete) {
                this.onComplete(this.images);
            }
        };
        image.onerror = (error) => {
            throw new Error(`Error loading image ${src}:`, error);
        };
        image.src = src;
    }

    load(imagesArray, onProgress, onComplete) {
        if (onProgress) this.onProgress = onProgress;
        if (onComplete) this.onComplete = onComplete;

        imagesArray.forEach((e) => {
            this.addImage(e);
        });
    }
}