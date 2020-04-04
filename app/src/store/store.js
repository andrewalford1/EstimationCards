import API from '../api'

const rooms = API.firestore().collection('rooms')
const users = API.firestore().collection('users')

export const getRealTimeUsersInRoom = (room, cb) => {
    return users
        .where('roomId', '==', room)
        .orderBy('joinedAt')
        .onSnapshot(
            async (querySnapshot) => {
                const newUsers =
                    querySnapshot && querySnapshot.docs
                        ? querySnapshot.docs.map((doc) => ({
                              ...doc.data(),
                              id: doc.id,
                          }))
                        : []

                if (cb) {
                    cb(null, getUsersInRoom(newUsers))
                }
            },

            (error) => {
                if (cb) {
                    cb(error, [])
                }
            }
        )
}

export const getUsersInRoom = (users) => {
    const sortedUsers = users.sort((firstUser, secondUser) => {
        return firstUser.joinedAt.seconds > secondUser.joinedAt.seconds ? 1 : -1
    })

    return sortedUsers
}
// export const getNumbersChosenByUsers
// export const getUserReadyStatus

export default { rooms, users }
