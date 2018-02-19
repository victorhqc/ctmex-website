import React from 'react';
import PropTypes from 'prop-types';

const Html = ({
  helmet,
  style,
  favicon,
  bundle,
  version,
  children,
}) => (
  <html lang="es-MX">
    <head>
      {helmet.title.toString()}
      {helmet.meta.toString()}
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="es-MX" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
      {style}
    </head>
    <body>
      <div id="root">{children}</div>
      <script src={`"${bundle}?${version}"`} />
      <script>{`window.__VERSION__='${version}';`}</script>
      {'<!-- Global site tag (gtag.js) - Google Analytics -->'}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114051003-1" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-114051003-1');`}
      </script>
    </body>
  </html>
);

Html.defaultProps = {
  style: '',
};

Html.propTypes = {
  helmet: PropTypes.shape({
    title: PropTypes.func,
    string: PropTypes.func,
  }).isRequired,
  style: PropTypes.string,
};

export default Html;
