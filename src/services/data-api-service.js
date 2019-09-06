import config from '../config'
import TokenService from './token-service'

const DataService = {

    getData(pathName) {
        return fetch(`${config.API_ENDPOINT}api/${pathName}/`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
    }

}

export default DataService
