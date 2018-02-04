import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ThemeProvider from '../themes/Provider';
import Menu from '../components/Menu';
import A from '../components/A';
import H1 from '../components/H1';
import H3 from '../components/H3';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Map from '../components/Map';

import ajax from '../utils/ajax';

import {
  getMargin,
  getPadding,
  getColor,
  getFontSize,
  getThemeColor,
} from '../themes/base';

import {
  mediaQuery,
} from '../themes/utils';

import {
  CONTACT_US,
  PHONE,
  ADDRESS,
  EMAIL,

  FORM_NAME,
  FORM_PHONE,
  FORM_EMAIL,
  FORM_TITLE,
  FORM_BODY,
  FORM_SEND,

  SUCCESS_EMAIL_TITLE,
  SUCCESS_EMAIL_MESSAGE,

  FAILED_EMAIL_TITLE,
  FAILED_EMAIL_MESSAGE,
} from '../../locales/es/contact';

const CONTACT_EMAIL = 'colegiodetenismexicano@gmail.com';

const Form = styled.form`
  text-align: right;
  border-right: 1px solid ${getThemeColor}40;
  margin-right: 3em;
  padding-right: 3em;

  ${mediaQuery('sm', `
    text-align: center;
    border: none;
    margin: 0;
  `)}

  .label {
    display: block;
    text-align: right;
    margin-top: ${getMargin('sm')}px;
    margin-bottom: ${getMargin('sm')}px;

    ${mediaQuery('sm', `
      text-align: center;
    `)}

    span {
      vertical-align: top;
      margin-right: ${getMargin('md')}px;

      ${mediaQuery('sm', `
        display: block;
        width: 100%;
        margin-right: 0;
        margin-bottom: ${getMargin('xs')}px;
        font-size: ${getFontSize('lg')}em;
      `)}
    }
  }

  input[type="text"],
  input[type="email"],
  input[type="number"] {
    border: 1px solid ${getColor('gray')};
    border-radius: 4px;
    padding: ${getPadding('xs')}px ${getPadding('sm')};
    outline: none;

    ${mediaQuery('sm', `
      width: 80%;
    `)}
  }

  textarea {
    border: 1px solid ${getColor('gray')};
    border-radius: 4px;
  }

  .button {
    background-color: ${getColor('shamrock')};
    color: ${getColor('white')};
    padding: ${getPadding('sm')}px;
    border-radius: 4px;
    min-width: 125px;
    cursor: pointer;
    border: none;
    outline: none;

    transition-property: background-color:
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      background-color: ${getColor('mountainMeadow')};
    }

    &:active {
      background-color: ${getColor('jewel')};
    }
  }
`;

const getResponseColor = (props) => {
  if (props.success) {
    return getColor('mountainMeadow');
  }

  return getColor('carnation');
};

const ResponseMessage = styled.div`
  color: ${getResponseColor};
`;

const resetForm = () => ({
  title: '',
  message: '',
  name: '',
  phone: '',
  email: '',
});

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: resetForm(),
      isFetching: false,
      isSent: false,
      isFailed: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(keyName) {
    return e => this.setState({
      data: {
        ...this.state.data,
        [keyName]: e.target.value,
      },
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      data,
      isFetching,
    } = this.state;

    if (isFetching) {
      return;
    }

    this.setState({
      isFetching: true,
    });

    ajax.post('/email', data)
      .then(() => {
        this.setState({
          data: resetForm(),
          isSent: true,
          isFetching: false,
        });
      })
      .catch(() => {
        this.setState({
          isFailed: true,
          isFetching: false,
        });
      });
  }

  renderForm() {
    const {
      isFetching,
    } = this.state;

    const {
      title,
      message,
      name,
      phone,
      email,
    } = this.state.data;

    return (
      <Form onSubmit={this.onSubmit}>
        <label className="label" htmlFor={FORM_NAME}>
          <span>
            {FORM_NAME}
          </span>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.onChange('name')}
            required
          />
        </label>
        <label className="label" htmlFor={FORM_PHONE}>
          <span>
            {FORM_PHONE}
          </span>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.onChange('phone')}
            required
          />
        </label>
        <label className="label" htmlFor={FORM_EMAIL}>
          <span>
            {FORM_EMAIL}
          </span>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onChange('email')}
            required
          />
        </label>
        <label className="label" htmlFor={FORM_TITLE}>
          <span>
            {FORM_TITLE}
          </span>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.onChange('title')}
            required
          />
        </label>
        <label className="label" htmlFor={FORM_BODY}>
          <span>
            {FORM_BODY}
          </span>
          <textarea
            cols="30"
            rows="4"
            id="message"
            name="message"
            value={message}
            onChange={this.onChange('message')}
            required
          />
        </label>
        <input
          className="button"
          type="submit"
          value={FORM_SEND}
          disabled={isFetching}
        />
      </Form>
    );
  }

  renderResponses() {
    const {
      isSent,
      isFailed,
    } = this.state;

    if (isSent) {
      return (
        <ResponseMessage success>
          <h3>{SUCCESS_EMAIL_TITLE}</h3>
          <p>{SUCCESS_EMAIL_MESSAGE}</p>
        </ResponseMessage>
      );
    }

    if (isFailed) {
      return (
        <ResponseMessage>
          <h3>{FAILED_EMAIL_TITLE}</h3>
          <p>{FAILED_EMAIL_MESSAGE}</p>
        </ResponseMessage>
      );
    }

    return null;
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>ctmex - contacto</title>
          <meta property="og:site_name" content="ctmex" />
          <meta property="og:title" content="Colegio de tenis mexicano - Contacto" />
          <meta property="og:url" content="http://colegiodetenis.mx/contact" />
          <meta property="og:type" content="website" />
          <meta property="og:author" content="https://github.com/victorhqc" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@colegiotenismx" />
          <meta property="twitter:creator" content="https://github.com/victorhqc" />
          <meta property="twitter:title" content="ctmex" />
          <meta property="twitter:description" content="Colegio de tenis mexicano" />

          <meta name="description" content="Colegio de tenis mexicano" />
        </Helmet>
        <ThemeProvider color="white">
          <Fragment>
            <Menu />
            <Container height="30vh" verticalAlign>
              <H1>{CONTACT_US}</H1>
            </Container>
            <Container height="50vh" noMargin>
              <Map />
            </Container>
            <Container margin={getMargin('lg')}>
              <Row size="sm">
                <Column size={2 / 3}>
                  {this.renderForm()}
                </Column>
                <Column size={1 / 3}>
                  <H3>
                    {PHONE}<br />
                    <small>445 123 123</small>
                  </H3>
                  <H3>
                    {ADDRESS}<br />
                    <small>Querétaro, Qro. Mex.</small>
                  </H3>
                  <H3>
                    {EMAIL}<br />
                    <small>
                      <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>
                    </small>
                  </H3>
                </Column>
              </Row>
            </Container>
            <Container>
              {this.renderResponses()}
            </Container>
          </Fragment>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default {
  component: ContactPage,
};
