import API from '../api'

const rooms = API.firestore().collection('rooms')
const users = API.firestore().collection('users')

// export const getUsersInRoom
// export const getNumbersChosenByUsers
// export const getUserReadyStatus

export default { rooms, users }
