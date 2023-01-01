class TodoFormComponents {
    htmlElement;

    constructor(){
        this.htmlElement = document.createElement(`form`);
        this.htmlElement.className  = 'todo-form shadow p-4'
        this.htmlElement.innerHTML = `
        <h2 class="h2 text-center">Create Todo</h2>
        <div class="mb-3">
          <label for="todo-car" class="form-label">Car brand</label>
          <input type="text" class="form-control" id="todo-car" name ="carBrand">
        </div>  
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="todo-done" name ="done">
          <label class="form-check-label" for="todo-done">Add this car in market place</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Yeah</button>`;

        this.htmlElement.addEventListener('submit' , (event) => {
            event.preventDefault();

            const formData = new FormData(event.target );
            const carBrand = formData.get('carBrand');
            const done = formData.get('done') === 'on';

            const dataForTodoCreation = {carBrand, done};
                

            console.log(dataForTodoCreation);
        })

    }
}
export default TodoFormComponents