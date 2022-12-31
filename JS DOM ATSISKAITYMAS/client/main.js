import API from './api.js';
import ItemsTableComponent from './components/concrete/items-table-component.js';
import ContainerComponent from './components/wrappers/container-component.js';
import HeaderComponents from './components/concrete/header-components.js';


const rootHtmlElelement = document.querySelector('#root')

API.getItems()
.then((items) => {
    const itemsTableComponent = new ItemsTableComponent({items});
    const headerComponent = new HeaderComponents({
        text: 'Masinu salonas',
        className: 'text-center my-4'
    })
        


    const container = new ContainerComponent({
        children: [
            headerComponent.htmlElement,
            itemsTableComponent.htmlElement,
        ],
    });
        
       
    rootHtmlElelement.append(
        container.htmlElement,
    );
})
.catch(alert);