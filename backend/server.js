import express from 'express';
import dotenv from 'dotenv'
import cors from "cors";
import mongoose from 'mongoose';
import userRoutes from './routes/registerUser.js'

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

// middleware for logging what path & method were invoked
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})


// Routes
app.use('/accounts', userRoutes)


// app.get('/', (req, res) =>{
// 	res.send('well hello there!')
// })

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

const start = async () => {
	try {
		await mongoose
			.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then((res) => console.log('DB Connected'));
	} catch (err) {
		console.log('DB ERROR', err);
	}
};

start();
