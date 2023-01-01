class TodoFormComponents {
    htmlElement;

    constructor(){
        this.htmlElement = document.createElement(`form`);
        this.htmlElement.className  = 'todo-form shadow p-4'
        this.htmlElement.innerHTML = `
        <h2 class="h2 text-center">Create Todo</h2>
        <div class="mb-3">
          <label for="todo-brand" class="form-label">Car brand</label>
          <input type="text" class="form-control" id="todo-brand" name ="brand">
        </div>
        <div class="mb-3">
          <label for="todo-module" class="form-label">Car module</label>
          <input type="text" class="form-control" id="todo-module" name ="module">
        </div> 
        <div class="mb-3">
        <label for="todo-price" class="form-label">Car price in USD</label>
        <input type="text" class="form-control" id="todo-price" name ="price">
        </div>  
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="todo-instock" name ="instock">
          <label class="form-check-label" for="todo-instock">Add this car in market place</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Yeah</button>`;

        this.htmlElement.addEventListener('submit' , (event) => {
            event.preventDefault();

            const formData = new FormData(event.target );
            const brand = formData.get('brand');
            const module = formData.get('module');
            const price = formData.get('price');
            const instock = formData.get('instock') === 'on';

            const dataForTodoCreation = {brand, instock, module, price}
                

            console.log(dataForTodoCreation);
        })

    }
}
export default TodoFormComponents