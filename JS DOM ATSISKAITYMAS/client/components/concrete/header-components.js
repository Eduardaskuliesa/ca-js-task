class HeaderComponents{
    htmlElement;

    constructor({text, elementType = 'h1', className}){
        this.htmlElement = document.createElement(elementType);
        if(className) this.htmlElement.className = className;
        this.htmlElement.innerText = text;
    }
}
export default HeaderComponents