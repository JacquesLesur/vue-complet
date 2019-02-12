export default class WordPressService {

  getRequest() {
    return async () => {
     const response = await fetch('https://www.thermiefrance.com/wp-json/wp/v2/posts');
     const myJson = await response.json(); 
   }

}  
  
  }