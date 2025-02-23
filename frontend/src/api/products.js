const axios = require('axios');

const getProduct = ()=>{

    axios.get('http://localhost:1337/api/products')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log('Error ===>',error);
    })
}

export {getProduct};