const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id: uuidv4(),
        username: "nazim",
        email: "adsl@yahoo.com"
    },
    {
        id: uuidv4(),
        username: "nazim",
        email: "adsl@yahoo.com"
    }
]

module.exports = users;