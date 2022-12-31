import API from "../../api.js";

class ItemsTableComponent {
    htmlElement;

    constructor({items}){
        this.htmlElement = document.createElement('table')
        this.htmlElement.className = 'table table-striped shadow'
        this.htmlElement.innerHTML = `
        <thead class="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Module</th>
            <th>InStock</th>
            <th>Price in USD</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>`;

       const tbody = this.htmlElement.querySelector('tbody');
       const rowsHtmlElements = items.map(this.createRow);
       tbody.append(...rowsHtmlElements);
    }


    createRow({id, brand, module, inStock, price}){
      const tr = document.createElement('tr');
      tr.innerHTML= `
        <td>${id}</td>
        <td>${brand}</td>
        <td>${module}</td>
        <td>${inStock ? 'Yes' : 'No'}</td>
        <td>${price}</td>
        <td class= "d-flex justify-content-end">
          <button class= "btn btn-danger">X</button>     
        </td>`;


      const delButton = tr.querySelector('.btn-danger');
      delButton.addEventListener('click', async () => {
        await API.deletItem(id);
        const items = await API.getItems();
      })
      
      return tr;   
    }
}
export default ItemsTableComponent
