import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import favicon from '../../src/assets/favicon.png';

const version = process.env.NODE_ENV === 'production' ? '[AIV]{version}[/AIV]' : 'development';
const bundle = process.env.NODE_ENV === 'production' ? 'bundle.js' : 'bundle.dev.js';

export default ({ req, context }) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString((
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.path} context={context}>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </StaticRouter>
    </StyleSheetManager>
  ));
  const styleTags = sheet.getStyleTags();

  const helmet = Helmet.renderStatic();

  return `<html lang="es-MX">
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <link rel="shortcut icon" href="${favicon}" type="image/x-icon" />
    <meta charset="utf-8" />
    <meta http-equiv="content-language" content="es-MX" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="google-site-verification" content="QXzJc8AVGIK88EaltTJ_GqfB8OMe7rtPV9pXrmjhmIA" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
    ${styleTags}
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="${bundle}?${version}"></script>
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
</html>`;
};
