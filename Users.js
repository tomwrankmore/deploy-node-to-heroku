const axios = require('axios');
const User = require('./User');

const Users = async (amount) => {
    const randomUsersResponse = await axios.get(`https://randomuser.me/api?results=${amount}`)
    // console.log(randomUsersResponse)
    const users = randomUsersResponse.data.results;

    const templatedUsers = [];
    for await (const U of users) {
        const templatedUser = await User(U);
        templatedUsers.push(templatedUser)
    }

    return templatedUsers

}

module.exports = Users