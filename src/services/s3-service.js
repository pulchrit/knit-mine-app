import config from '../config'

const S3Service = {

    uploadToS3(file) {
        return S3Service.getSignedRequest(file)
            .then(json => S3Service.uploadFile(file, json.signedRequest, json.url))
            .then(url => {
                return url
            })
            .catch(err => {
                console.error(err)
                return null
            })
    },

    getSignedRequest(file) {
        return fetch(`${config.API_ENDPOINT}sign-s3?fileName=${file.name}&fileType=${file.type}`)
            .then(res => 
                (!res.ok)
                ? res.json().then(error => Promise.reject(error))
                : res.json()
            )
    },

    uploadFile(file, signedRequest, url) {
        const options = {
            method: 'PUT',
            body: file
        }
        return fetch(signedRequest, options)
            .then(response => {
                if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
                }
                return url;
            });
    }
}

export default S3Service