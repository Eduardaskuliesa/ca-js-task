class FlexContainer{
    htmlElement;

    constructor({children}){
        this.htmlElement = document.createElement('div')
        this.htmlElement.className = 'd-flex gap-4';
        this.htmlElement.append(...children);
    }
}
export default FlexContainer