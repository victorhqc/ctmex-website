import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import server from './server';
import ContextManager from './server/helpers/context';
import sendEmail from './server/helpers/sendEmail';
import {
  NOT_FOUND,
} from './constants';

dotenv.config();
const app = express();
const PORT = process.env.port || 3000;

app.use(express.static('public'));

app.post('/email', (req, res) => {
  if (!sendEmail()) {
    res.status(500);
    res.send({ error: true });
    return;
  }

  res.status(200);
  res.send({ sucess: true });
});

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
