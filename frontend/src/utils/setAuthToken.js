import Axios from 'axios';

const setAuthToken = token => {
    if (token) {
        Axios.defaults.headers.common["Authorization"] = 'Bearer '+token
    }else{
        Axios.defaults.headers.common["Authorization"] = ''
    }
}
export default setAuthToken
