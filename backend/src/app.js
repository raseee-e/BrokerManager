import express from 'express';
import cors from 'cors';
import path from 'path';
import { createRequire } from 'module';
import userRoutes from './routes/user.routes.js';
import stockRoutes from './routes/stock.routes.js';
import watchlistRoutes from './routes/watchlist.routes.js';
import shareRoutes from './routes/share.routes.js';
import swaggerUi from 'swagger-ui-express';

const require = createRequire(import.meta.url);
const swaggerDocument = require('../swagger/swagger.json');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Angular app
app.use(express.static(path.join(path.dirname(new URL(import.meta.url).pathname), '../public')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/watchlist', watchlistRoutes);
app.use('/api/shares', shareRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;


