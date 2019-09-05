import config from '../config'
import TokenService from './token-service'

const DataService = {

    getData(pathName) {
        return fetch(`${config.API_ENDPOINT}api/${pathName}/`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
    },

    /* getAllProjectPatterns() {
        return fetch(`${config.API_ENDPOINT}api/project-patterns/`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
    },

    getAllStitchPatterns() {
        return fetch(`${config.API_ENDPOINT}api/stitch-patterns/`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
    } */

}

export default DataService
