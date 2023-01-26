import express, { Application } from "express";
import router from './routes/restaurant';
const app: Application = express();
const port = 3001 ;
const restaurant = require("./routes/restaurant")
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));
app.use("/restaurant",router)
try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
export default app;