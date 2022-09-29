import _ from "lodash"
import axios from "axios";

export const fetchAlbums = async (id) => {

  console.log(id)

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/albums`
  );

  const filterData =  data.filter(val =>  parseInt(id)===val.userId);




  return filterData;
};
