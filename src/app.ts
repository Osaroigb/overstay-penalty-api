import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import { handleError } from './helpers/errorHandler';
import { initiateModuleRoutes } from './modules/routes';
import express, { Request, Response, NextFunction } from 'express';

const swaggerSpecs = require('../swagger');
const swaggerUi = require('swagger-ui-express');

const app = express();
const options = { customSiteTitle: "Overstay Penalty API" };

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpecs, options));

app.use(cors());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.get('/', (_req, res) => res.send('Welcome to Overstay Penalty API'));

initiateModuleRoutes(app);

app.use((req, res, _next): void => {
  res.status(404).send({
    success: false,
    error: 'notFound',
    message: `resource '${req.url}' not found`,
    data: null
  });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  handleError(err, res);
});

process.on('uncaughtException', (error: Error) => {
  handleError(error);
});

process.on('unhandledRejection', (reason: Error) => {
  handleError(reason);
});

export default app;
