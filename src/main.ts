
export class Main {
    APP_ID = '#app';
    app: HTMLElement = null;
    constructor() {
        this.app = document.querySelector(this.APP_ID);
        if (this.app === null) {
            throw new Error('unable to build application div with id="app" is required');
        }
    }

    helloWorld(){
        const template = '<div class="test=name">' +
                            '<p>Hello World </p>' +
                        '</div>';
        this.app.innerHTML = template;
    }
    
}

const main = new Main();

main.helloWorld();