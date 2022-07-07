import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { port } from './config';


const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('TypeScript app is running.')
});

app.listen(port, () => {
    console.log(`TypeScript application is now running on port ${port}`);
});
