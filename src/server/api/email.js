import axios from 'axios';
import sendEmail from '../helpers/sendEmail';

const emailAPI = (app) => {
  const axiosInstance = axios.create({
    baseURL: process.env.MAILGUN_API,
    auth: {
      username: 'api',
      password: process.env.MAILGUN_API_KEY,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  app.post('/email', (req, res) => {
    sendEmail(axiosInstance, req.body)
      .then(() => {
        res.status(200);
        res.send({ sucess: true });
      })
      .catch((e) => {
        console.log('error', e);
        res.status(500);
      });
  });
};

export default emailAPI;
