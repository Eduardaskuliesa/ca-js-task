class ItemsTableComponent {
    htmlElement;

    constructor(items){
        this.htmlElement = document.createElement('table')
        this.htmlElement.className = 'table table-striped shadow'
        this.htmlElement.innerHTML = `
        <table class="">
        <thead class="bg-dark text-white">
          <tr>
            <th>Brand</th>
            <th>Module</th>
            <th>InStock</th>
            <th>Price in USD</th>
          </tr>
        </thead>
        <tbody>
        ${items.map(({brand, module, inStock, price}) => `
        <tr>
          <td>${brand}</td>
          <td>${module}</td>
          <td>${inStock ? 'Yes' : 'No'}</td>
          <td>${price}</td>
        </tr>
        `).join('')}
        </tbody>
      </table>`
    }
}
export default ItemsTableComponent
