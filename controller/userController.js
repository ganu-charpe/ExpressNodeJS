import { userList } from '../model/userModel.js';

export function handleUser(req, resp) {
    const userdata = userList();
    resp.render('user', {users: userdata});
}