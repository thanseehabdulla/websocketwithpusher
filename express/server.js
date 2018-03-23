const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var pusher = new Pusher({
    appId: '496979',
    key: 'b244b09795dc1167b72b',
    secret: '87fef24f40a5856cf51c',
    cluster: 'ap2',
    encrypted: true
});



// const pusher = new Pusher({
//     app_id: '496979',
//     key: 'b244b09795dc1167b72b',
//     secret: '87fef24f40a5856cf51c',
//     cluster: 'ap2',
//     encrypted: true
// });
app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {


    const payload = req.body;


    pusher.trigger('chat', 'message', payload);

    // pusher.trigger('chat', 'message', payload);


    console.log(payload);


    res.send(payload)
});

app.listen(app.get('PORT'), () =>
    console.log('Listening at ' + app.get('PORT')))