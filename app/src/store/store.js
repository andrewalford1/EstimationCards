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

export const createRoom = (attributes) => {
    const { roomId } = attributes
    const now = new Date()

    // Do we need updatedAt?
    return rooms.doc(roomId).set({ roomId, createdAt: now, udpatedAt: now })
}

export const createUser = async (attributes) => {
    try {
        const { name, roomId, userId, ready, number } = attributes
        const joinedAt = new Date()

        // Set the user
        await users
            .doc(userId)
            .set({ name, roomId, userId, ready, number, joinedAt })

        // Fetch the user which we just created and return data if it exists
        const user = await users.doc(userId).get()

        return user.exists ? user.data() : false
    } catch (error) {
        console.error(error)
    }
}

// export const getNumbersChosenByUsers
// export const getUserReadyStatus

export default { rooms, users }
