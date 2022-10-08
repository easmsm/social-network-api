const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

router 
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;