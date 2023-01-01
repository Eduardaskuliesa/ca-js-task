const formatError = (error) => {
  return error.message;
}

const API = {
    async getTodos(){
        try {
         const respons = await fetch('http://localhost:5000/items') ;
         const items = await respons.json();

          return items;
        } catch(error){
         throw formatError(error);
        }
      },
      async deletTodo({ id, title }){
        try {
          const respons = await fetch(`http://localhost:5000/items/${id}`,{
            method: 'DELETE',
          });
          if(respons.status === 404){
            throw new Error(`Element ${title} dose not exist`)
          }
          const deletedItem = await respons.json();

 
           return deletedItem;
         } catch(error){
          throw formatError(error);
         }
      },
      
      async createTodo(todoData){
        try{
          const respons = await fetch(`http://localhost:5000/items`,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({todoData})
          })

        }catch(error){
          throw formatError(error)
        }

      }
};
export default API
