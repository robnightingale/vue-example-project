import auth from '@/auth/helpers'

export default {

  // List out all your API requests here.

  getFriends (callback) { auth.get('/response', {}, callback) }
}
