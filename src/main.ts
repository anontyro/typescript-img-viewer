import {StyleUtil} from './utils/styleUtil';
require('./main.scss');
export class Main {

    private APP_ID = '#app';
    private IMG_CONTAINER = '#img-container';
    private IMG_CLASS = '.img-preview';
    private styleUtil: StyleUtil = null;
    imgContainer: any = null; // Main container for images
    imgArray: any = null; // HTML_5_ELEMENT_ARRAY

    app: HTMLElement = null;

    constructor() {
        this.app = document.querySelector(this.APP_ID);
        if (this.app === null) {
            throw new Error('unable to build application div with id="app" is required');
        }
        this.imgContainer = document.querySelector(this.IMG_CONTAINER);
        this.imgArray = document.querySelectorAll(this.IMG_CLASS);
        this.styleUtil = new StyleUtil(this.imgArray, this.imgContainer, this.app);
    }

    helloWorld(){
        const template = '<div class="test-name">' +
                            '<p>Hello World </p>' +
                        '</div>';
        this.app.innerHTML = template;
    }
    
}

const main = new Main();
declare function require(name: string): string;
// main.helloWorld();