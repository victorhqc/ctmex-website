import React, { Fragment } from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import Routes from '../client/Routes';
import favicon from '../../src/assets/favicon.png';

import {
  isExistingRoute,
} from './helpers/routes';

const version = process.env.NODE_ENV === 'production' ? '[AIV]{version}[/AIV]' : 'development';
const bundle = process.env.NODE_ENV === 'production' ? 'bundle.js' : 'bundle.dev.js';

export default ({ res, req, context }) => {
  const statusCode = isExistingRoute(req.originalUrl) ? 200 : 404;
  res.writeHead(statusCode, {
    'Content-Type': 'text/html',
    'X-Powered-By': '--',
  });
  res.write(`<!DOCTYPE html>
<html lang="es-MX">
<head>
  <link rel="shortcut icon" href="${favicon}" type="image/x-icon">
  <meta charset="utf-8">
  <meta http-equiv="content-language" content="es-MX">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
</head>
<body>
  <div id="root">`);

  const sheet = new ServerStyleSheet();

  const helmetContext = {};

  const jsx = sheet.collectStyles((
    <HelmetProvider context={helmetContext}>
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.path} context={context}>
          <Fragment>{renderRoutes(Routes)}</Fragment>
        </StaticRouter>
      </StyleSheetManager>
    </HelmetProvider>
  ));

  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  stream.pipe(res, { end: false });

  stream.on('end', () => {
    res.end(`<script src="${bundle}?${version}"></script>
<script>window.__VERSION__='${version}';</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114051003-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-114051003-1');
</script>

</body>
</html>`);
  });
};
