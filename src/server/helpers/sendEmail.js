import xss from 'xss';
import querystring from 'querystring';
import emailTemplate from '../templates/email';

const SEND_EMAIL_PATH = '/messages';

const sendEmail = (emailAxios, {
  name,
  email,
  phone,
  title,
  message,
}) => new Promise((resolve, reject) =>
  emailAxios.post(SEND_EMAIL_PATH, querystring.stringify({
    from: process.env.CTMEX_EMAIL_WEBSITE,
    to: process.env.CTMEX_EMAIL_CONTACT,
    subject: xss(title),
    html: emailTemplate({
      name: xss(name),
      email: xss(email),
      phone: xss(phone),
      title: xss(title),
      message: xss(message),
    }),
    'h:Reply-To': email,
  })).then(resolve).catch(reject));

export default sendEmail;
