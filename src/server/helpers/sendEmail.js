import axios from 'axios';
import querystring from 'querystring';

const SEND_EMAIL_PATH = '/messages';

const emailConfig = () => axios.create({
  baseURL: process.env.MAILGUN_API,
  auth: {
    username: 'api',
    password: process.env.MAILGUN_API_KEY,
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default emailConfig;

export const sendEmail = emailAxios => new Promise((resolve, reject) =>
  emailAxios.post(SEND_EMAIL_PATH, querystring.stringify({
    from: process.env.CTMEX_EMAIL,
    to: 'victorhqc@gmail.com',
    subject: 'foo foo',
    text: 'Hello World!',
  })).then(resolve).catch(reject));
