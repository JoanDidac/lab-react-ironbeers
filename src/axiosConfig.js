// import axios from 'axios';

// axios.defaults.transformResponse = (data, headers) => {
//   if (headers['content-type'] === 'application/json' && data) {
//     const parsedData = JSON.parse(data);
//     if (Array.isArray(parsedData)) {
//       return parsedData.map(beer => {
//         if (beer.image_url === 'https://images.punkapi.com/v2/keg.png') {
//           beer.image_url = 'https://png2.cleanpng.com/sh/b7ac9e4d793b95c61eeb63128b1da280/L0KzQYi4UcI4N5cATpGAYUHmRbS3hMM4bWVqTZC5NUCzRIe7WcE2OWI9SKo5MUO1Qoq1kP5o/5a1c5c0d37e4e5.050046491511808013229.png';
//         }
//         return beer;
//       });
//     } else {
//       if (parsedData.image_url === 'https://images.punkapi.com/v2/keg.png') {
//         parsedData.image_url = 'https://cdn.shopify.com/s/files/1/0269/8575/8790/products/Magic_Orange-Bottle_450x450px_400x.png?v=1644608699';
//       }
//       return parsedData;
//     }
//   }
//   return data;
// };
