import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'

const app = express();
const PORT = 8080

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
