import API from './api.js';


API.getItems()
.then((items) => console.table(items))