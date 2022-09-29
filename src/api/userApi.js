import axios from "axios";

export const fetchUser = async() =>{

  const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/users`);

  return data
}

