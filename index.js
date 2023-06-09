const express = require('express');
const app = express();
const db = require('./db');
const router = require('./router');

const { User } = require('./models');
const bcrypt = require('bcrypt');



const PORT = 5000;

app.use(express.json());

app.post('/register', async (req, res) => {
    
    try {
        if (req.body.password.length < 4) {
            return res.send('Password must be longer than four characters')
        }

        const newUser = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role_id: 1
            }
        )
        return res.send(newUser);
    } catch (error) {
        return res.send('Somethign went wrong creating users' + error.message)
        
    }
})

app.use(router);

app.get('/health', (req, res) => {
    return res.send('healthy');
    
});

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})
