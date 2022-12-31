const API = {
    async getItems(){
        try {
         const respons = await fetch('http://localhost:5000/items') ;
         const items = await respons.json();

          return items;
        } catch(error){
          return error;
        }
    }
}
export default API
