class TodoFormComponents {
    htmlElement;

    constructor(){
        this.htmlElement = document.createElement(`form`);
        this.htmlElement.className  = 'todo-form shadow p-4'
        this.htmlElement.innerHTML = `
        <h2 class="h2 text-center">Create Todo</h2>
        <div class="mb-3">
          <label for="todo-title" class="form-label">Title</label>
          <input type="email" class="form-control" id="todo-title" aria-describedby="emailHelp">
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Submit</button>  
        `
    }
}
export default TodoFormComponents