const { default: axios } = require("axios")

const getCategory = async()=>{
    const response =await axios.get('http://localhost:8000/category/get');
    const data = await response.data;
    return data.getCategory
}
export {getCategory}