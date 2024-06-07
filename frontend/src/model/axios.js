
import { setStage } from "../store/global";
import axios from "axios";



class AxiosService {
  // call axiosInstance
   
   axiosInstance = {}
   dispath = () =>{}
   baseURL = "http://127.0.0.1:8000/api/"
   timeout = 30000

  constructor() {
    
    
    this.axiosInstance = axios.create({ baseURL: this?.baseURL })
    this.axiosInstance.defaults.timeout = this.timeout;
    
  //   // Add a request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        //onst access_token = res?.token;
        
        this.dispath( setStage( { isLoading: true } ) )
        
        // if (access_token) 
        //   config.headers!.Authorization = `Bearer ${access_token}`;
        
        return config;
      },
      (error) => {
        if (error.response.status === 401) {
          //deleteCookie("access_token");
          //window.location.href = `//${window.location.host}/login`;
        }
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {        
        this.dispath( setStage( { isLoading: false } ) )
        return response;
      },
      (handleError) => {

        this.dispath( setStage( { isLoading: false } ) )

        // if (error.response?.status === 401) {

        // }
        return Promise.reject(handleError);
      }
    );

  }

  setDispath = (dispath) => {
    this.dispath = dispath
  }

  async post( url, data, config = {} ) {
    try {
      return await this.axiosInstance.post(url, data, config);
    
    } catch (error) {
      return this.handleError(error);
    }
  }

  async get( url, config ) {
    
    try {
      const res = await this.axiosInstance.get(url, config);
      return ( res?.data || {} )
    } catch (error) {
      return this.handleError(error);
    }
  }

  async patch( url, data, config = {} ) {
    try {
      const res = await this.axiosInstance.patch(url, data, config);
      return ( res?.data || {} )
    } catch (error) {
      return this.handleError(error);
    }
  }

  async put( url, data, config  ) {
    try {
      const res = await this.axiosInstance.put(url, data, config);
      return ( res?.data || {} )
    } catch (error) {
      return this.handleError(error);
    }
  }

  async delete( url, config = {} ) {
    try {
      const res = await this.axiosInstance.delete(url, config);
      return ( res?.data || {} )
    } catch (error) {
      return this.handleError(error);
    }
  }

  handleError(error) {

    let  err = {}

    if (error.response) 
    {
      let err = error.response?.data?.message || ""
      alert(err)
      throw (err)
      return { message: err, success: false };
    }
      
    // ** this case time out
    if (error.request) 
    { 
      err = "It appears that our server encountered an error while processing your request. Please check console log"
      alert(err)
      throw ( {  message: "Maybe the API URL link is incorrect, \n please check the baseURL in `/src/model/axios.js` ", success: false } )
      return {  message: err, success: false };
    }

    err = "It seems that your request experienced a timeout while waiting for a response from our server "
    alert(err)
    throw ( {  message: err, success: false }  )
    return {  message: err, success: false };
   
  }
}

// const axiosService = new AxiosService();
export const apiService = AxiosService;
