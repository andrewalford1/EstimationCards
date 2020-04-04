import API from '../api'

const rooms = API.firestore().collection('rooms')
const numbers = API.firestore().collection('rooms')

// Add methods to collect data

export default { rooms, numbers }
