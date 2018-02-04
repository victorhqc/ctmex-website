import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';

const Email = ({
  title,
  message,
  name,
  phone,
  email,
}) => (
  <Fragment>
    <h1>Nuevo contacto desde {process.env.WEB_DOMAIN}</h1>
    <h2>{title}</h2>
    <p>{message}</p>
    <p>Enviado por:</p>
    <address>
      <b>Nombre:</b> {name} <br />
      <b>Teléfono:</b> {phone} <br />
      <b>e-mail:</b> {email} <br />
    </address>
  </Fragment>
);

Email.defaultProps = {
  title: '',
  message: '',
  name: '',
  phone: '',
  email: '',
};

Email.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
};

const renderBody = data => renderToString(<Email {...data} />);

const emailTemplate = data => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Contacto desde ${process.env.WEB_DOMAIN}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
  ${renderBody(data)}
</body>
</html>
`;

export default emailTemplate;
