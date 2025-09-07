const path = require('path');
const express =require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { create } = require('domain');
const PORT = process.env.PORT || 3001
const app = express();
module.exports = app;
const { Connect, db } = require('./db');

const createApp = () => {
    app.use(morgan('dev'))
    app.use(bodyParser.json({limit: '1mb'}))
    app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}))
    app.use('/api', require('./api'))
    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'))
    })
    app.use((req, res, next) => {
        if(path.extname(req.path).length) {
            const err = new Error('Not found')
            err.status = 405
            next(err) 
        } else {
            next()
        }
    })
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send(err.message || 'Internal server error.')
    })
}
const startListening = () => {
    const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
}
if(require.main == module){
    createApp()
    db.sync()
    .then(() => {
      console.log('🗄️  Database synced');
      startListening();
    })
    .catch((err) => {
      console.error('Database connection failed:', err);
    });
} else {
    createApp()
}


