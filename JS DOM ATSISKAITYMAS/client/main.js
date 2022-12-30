import API from './api.js';
import ItemsTableComponent from './components/items-table-component.js';

const rootHtmlElelement = document.querySelector('#root')

API.getItems()
.then((items) => {
    const itemsTableComponent = new ItemsTableComponent(items);
    rootHtmlElelement.append(
        itemsTableComponent.htmlElement
    );
});  