import { Axiosinstance } from "@/app/utils/helper";

const getCategory = async(id=null)=>{
    let API = null
    if (id==null) {
        API = 'category/get';
    }else{
        API =  `category/get/${id}`;
    }
    const response =await Axiosinstance.get(API);
    const data = await response.data;
    return data.getCategory
}

const getColors = async(id=null) =>{
    let API = null;
    if (id==null) {
        API= "/color/get"
    }else{
        API = `/color/get/${id}`
    }
    const res = await Axiosinstance(API);
    const data = await res.data;
    return data.getColor;

}

const getBrands = async(id=null)=>{
    let API = null;
    if (id==null) {
        API = 'brands/get'
    }else {
        API = `brands/get/${id}`;
    }
    const res = await Axiosinstance(API);
    const data = await res.data;
    return data.getBrand;

}
export {getCategory,getColors,getBrands}