import _ from "lodash"
import axios from "axios";

export const fetchPhotos = async(id) =>{

  const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/photos`);


  const filterData =  data.filter(val =>  parseInt(id)===val.albumId);


  return filterData;

}

