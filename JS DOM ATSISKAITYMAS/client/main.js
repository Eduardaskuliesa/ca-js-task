import API from './api.js';
import TodoTableComponent from './components/concrete/todo-table-component.js';
import ContainerComponent from './components/wrappers/container-component.js';
import HeaderComponents from './components/concrete/header-components.js';
import TodoFormComponents from './components/concrete/todo-form-components.js';
import FlexContainer from './components/wrappers/flex-component.js';


const rootHtmlElelement = document.querySelector('#root')

API.getItems()
.then((items) => {
    const todoTableComponent = new TodoTableComponent({items});
    const headerComponent = new HeaderComponents({
        text: 'Car saloon',
        className: 'text-center my-4'
    });
    const todoFormComponents = new TodoFormComponents();
    const container = new ContainerComponent({
        children: [
            headerComponent.htmlElement, 
            new FlexContainer({
                children : [
                    todoTableComponent.htmlElement,
                    todoFormComponents.htmlElement,
                ]
            }).htmlElement
        ],
    });
        
       
    rootHtmlElelement.append(
        container.htmlElement,
    );
})
.catch(alert);