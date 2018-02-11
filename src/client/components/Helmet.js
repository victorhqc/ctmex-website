import React from 'react';
import PropTypes from 'prop-types';
import { Helmet as ReactHelmet } from 'react-helmet';

import {
  KEYWORDS,
} from '../../locales/es/main';

const Helmet = ({
  title,
  pathname,
  description,
  src,
}) => (
  <ReactHelmet>
    <title>{`ctmex${title ? ` - ${title}` : ''}`}</title>
    <meta property="og:site_name" content="ctmex" />
    <meta property="og:title" content="Colegio de tenis mexicano" />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`http://colegiodetenis.mx${pathname ? `${pathname}` : ''}`} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_MX" />
    <meta property="og:image" content={src} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@colegiotenismx" />

    <meta name="description" content={description} />
    <meta
      name="keywords"
      content={KEYWORDS}
    />
  </ReactHelmet>
);

Helmet.defaultProps = {
  title: null,
  pathname: null,
  src: null,
};

Helmet.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string,
  description: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default Helmet;
