import API from "../../api.js";

class TodoTableComponent {
    htmlElement;
    handleDelet;
    tbodyHtmlElement;

    constructor({todos, handleDelet}){
        this.htmlElement = document.createElement('table')
        this.htmlElement.className = 'table table-striped shadow'
        this.htmlElement.innerHTML = `
        <thead class="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Module</th>
            <th>Price in USD</th>
            <th>In stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>`;
        this.handleDelet = handleDelet;
        this.tbodyHtmlElement = this.htmlElement.querySelector('tbody');
        this.renderTodos(todos);
    }


    createRow = ({id, brand, module, instock, price})=> {
      const tr = document.createElement('tr');
      tr.innerHTML= `
        <td>${id}</td>
        <td>${brand}</td>
        <td>${module}</td>
        <td>${price}</td>
        <td>${instock ? 'Yes' : 'No'}</td>
        <td class= "">
          <button class= "btn btn-danger">X</button>     
        </td>`;
        
      
      const delButton = tr.querySelector('.btn-danger');
      delButton.addEventListener('click', () => this.handleDelet({id, brand, module, instock, price}))
      return tr;
    }
    renderTodos = (todos) => {
       this.tbodyHtmlElement.innerHTML = null;
       const rowsHtmlElements = todos.map(this.createRow);
       this.tbodyHtmlElement.append(...rowsHtmlElements);
    }
}
export default TodoTableComponent
