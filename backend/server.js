import express from 'express';
import dotenv from 'dotenv'
import cors from "cors";
const app = express();
dotenv.config();
const port = process.env.PORT || 8080

app.use(cors({ 
	origin: [process.env.CLIENT_URL],
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204,
}));
app.use(express.json());

// Routes


app.get('/', (req, res) =>{
	res.send('well hello there!')
})

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})