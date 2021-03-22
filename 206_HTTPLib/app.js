const http = new EasyHTTP();

const data = {
  name: 'Fedor Fedorov',
  email: 'fedor@fed.com',
};

http
  .get('https://api.deezer.com/artist/6281')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
