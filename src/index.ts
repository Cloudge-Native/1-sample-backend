import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from "cors";

const app = express();
const port = 8080;

app.use(cors({origin: "*"}));

app.get('/', (req: Request, res: Response) => {
  res.send("Wow, you have dockerized your first application!")
});

/*
app.get('/v2', (req: Request, res: Response) => {
  res.send("There are some crazy groundbreaking new functionalities in version 2 :o")
});
*/

app.listen(port, () => {
  console.log(`Backend started on port ${port}!`);
});