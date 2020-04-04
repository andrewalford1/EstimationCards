import API from '../api'

const rooms = API.firestore().collection('rooms')
const numbers = API.firestore().collection('rooms')

// export const getUsersInRoom
// export const getNumbersChosenByUsers
// export const getUserReadyStatus

export default { rooms, numbers }
