
export default class GiphyService {  
  static getGiphy(search) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/stickers/trending?api_key=${process.env.API_KEY}&q=${search}&limit=25&rating=g`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}