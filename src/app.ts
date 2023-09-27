import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import router from "./Routes";

const port = process.env.PORT || 8000;

const app: Application = express();

app.use(morgan('common'));
app.use(express.static('public'));

app.use(router);


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});