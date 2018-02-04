import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import server from './server';
import ContextManager from './server/helpers/context';
import {
  NOT_FOUND,
} from './constants';

import email from './server/api/email';

dotenv.config();
const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

email(app);

app.get('*', (req, res) => {
  const promises = matchRoutes(Routes, req.path);

  Promise.all(promises).then(() => {
    const context = new ContextManager();
    const content = server({ req, context });

    if (context.get(NOT_FOUND)) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
