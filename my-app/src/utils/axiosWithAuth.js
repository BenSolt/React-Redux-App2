import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  var key = process.env.REACT_APP_KEY
  console.log(key)
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.haloapi.com',
    headers: {
      //Authorization: 
        "Ocp-Apim-Subscription-Key" : `${process.env.REACT_APP_KEY}`
        
        
     

      
    }
  });
};

export default axiosWithAuth;