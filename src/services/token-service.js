import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },

  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },

  hasAuthToken() {
    // This is easier for me to understand 
    return TokenService.getAuthToken() ? true : false
  },

}

export default TokenService
