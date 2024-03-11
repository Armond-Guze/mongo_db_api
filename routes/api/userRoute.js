const router = require('express').Router();

const {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userControllers');

router.route('/').get(getAllUsers).post(postUser)

router.route('/:userId').get(getUser).put(putUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;