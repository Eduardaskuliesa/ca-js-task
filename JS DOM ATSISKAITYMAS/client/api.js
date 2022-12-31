const API = {
    async getItems(){
        try {
         const respons = await fetch('http://localhost:5000/items') ;
         const items = await respons.json();

          return items;
        } catch(error){
          return error;
        }
      },
      async deletItem(id){
        try {
          const respons = await fetch(`http://localhost:5000/items/${id}`,{
            method: 'DELETE',
          }) ;
          const deletedItem = await respons.json();
 
           return deletedItem;
         } catch(error){
           return error;
         }

      }
};
export default API
