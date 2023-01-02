import API from './api.js';
import TodoTableComponent from './components/concrete/todo-table-component.js';
import ContainerComponent from './components/wrappers/container-component.js';
import HeaderComponents from './components/concrete/header-components.js';
import TodoFormComponents from './components/concrete/todo-form-components.js';
import FlexContainer from './components/wrappers/flex-component.js';


const rootHtmlElelement = document.querySelector('#root');

let todoTableComponent;
let todoFormComponents;

const handleDelet = async ({id, brand, module, price, instock}) => {
    try{
      await API.deletTodo({id, brand, module, price, instock});
    }catch(error){
      alert(error)
    } finally{
      const todos = await API.getTodos();
      todoTableComponent.renderTodos(todos);
    }
  }
  const onCreateTodo = async ({brand, price , module, instock}) => {
    try{
      await API.createTodo({brand, price, module, instock});
    }catch(error){
      alert(error)
    } finally{
      const todos = await API.getTodos();
      todoTableComponent.renderTodos(todos);
    }
  }

API.getTodos()
.then((todos) => {
    todoTableComponent = new TodoTableComponent({ todos, handleDelet} );
    const headerComponent = new HeaderComponents({
        text: 'Car saloon',
        className: 'text-center my-4'
    });
    todoFormComponents = new TodoFormComponents({onSubmit: onCreateTodo})
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