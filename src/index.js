import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sm from 'sitemap';
import { matchRoutes } from 'react-router-config';
import map from 'lodash/map';
import Routes from './client/Routes';
import server from './server';
import ContextManager from './server/helpers/context';

import email from './server/api/email';

import {
  routes,
} from './locales/es/main';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

email(app);

const sitemap = sm.createSitemap({
  hostname: process.env.WEB_DOMAIN,
  cacheTime: 24 * 60 * 1000,
  urls: map(routes, ({ url, ...route }) => ({
    ...route,
    url: url === '/' ? '/' : `${url}/`,
  })),
});

app.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      res.status(500).end();
      return;
    }

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

app.get('*', (req, res) => {
  const promises = matchRoutes(Routes, req.path);

  Promise.all(promises).then(() => {
    const context = new ContextManager();
    server({ res, req, context });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
