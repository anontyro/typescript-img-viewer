

export class StyleUtil {
    private imgArray: any = null;
    constructor(imgArray: any, imgContainer: HTMLElement ,appContainer: HTMLElement) {
        this.imgArray = imgArray;
        this.setupImgs(imgArray);
        this.setupContainer(appContainer, imgContainer);
        console.log(this.imgArray);
    }

    private setupImgs(imgArray: any) {
        for (let i = 0; i < imgArray.length; i++) {
            imgArray[i].style = 'height:200px; margin:5px';
        }


    }

    private setupContainer(appContainer: any, imgContainer: any) {
        imgContainer.style = 'display: flex';
        appContainer.style = 'display: flex; overflow-x: hidden; position: relative';
    }
}