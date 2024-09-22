import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import menuRouter from './menu/menu.route';
import restaurantRouter from './restaurant/restaurant.route';
import orderRouter from './order/order.route';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded())


app.use("/menu", menuRouter)
app.use("/order", orderRouter)
app.use("/restaurant", restaurantRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});