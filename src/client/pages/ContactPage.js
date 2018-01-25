import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import WhiteTheme from '../themes/White';
import Menu from '../components/Menu';
import A from '../components/A';
import H1 from '../components/H1';
import H3 from '../components/H3';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Map from '../components/Map';

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

    &:hover {
      background-color: ${getColor('mountainMeadow')};
    }

    &:active {
      background-color: ${getColor('jewel')};
    }
  }
`;

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      message: '',
      name: '',
      phone: '',
      email: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(keyName) {
    // return e => console.log(e.target.value);
    return e => this.setState({
      [keyName]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('state!', this.state);
  }

  renderForm() {
    const {
      title,
      message,
      name,
      phone,
      email,
    } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <label className="label" htmlFor={FORM_NAME}>
          <span>
            {FORM_NAME}
          </span>
          <input
            type="text"
            name={FORM_NAME}
            id={FORM_NAME}
            value={name}
            onChange={this.onChange('name')}
          />
        </label>
        <label className="label" htmlFor={FORM_PHONE}>
          <span>
            {FORM_PHONE}
          </span>
          <input
            type="number"
            name={FORM_PHONE}
            id={FORM_PHONE}
            value={phone}
            onChange={this.onChange('phone')}
          />
        </label>
        <label className="label" htmlFor={FORM_EMAIL}>
          <span>
            {FORM_EMAIL}
          </span>
          <input
            type="email"
            name={FORM_EMAIL}
            id={FORM_EMAIL}
            value={email}
            onChange={this.onChange('email')}
          />
        </label>
        <label className="label" htmlFor={FORM_TITLE}>
          <span>
            {FORM_TITLE}
          </span>
          <input
            type="text"
            name={FORM_TITLE}
            id={FORM_TITLE}
            value={title}
            onChange={this.onChange('title')}
          />
        </label>
        <label className="label" htmlFor={FORM_BODY}>
          <span>
            {FORM_BODY}
          </span>
          <textarea
            cols="30"
            rows="4"
            id={FORM_BODY}
            name={FORM_BODY}
            value={message}
            onChange={this.onChange('message')}
          />
        </label>
        <input className="button" type="submit" value={FORM_SEND} />
      </Form>
    );
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>ctmex - contacto</title>
          <meta property="og:site_name" content="ctmex" />
          <meta property="og:title" content="Colegio de tenis mexicano - contacto" />
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
        <WhiteTheme>
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
          </Fragment>
        </WhiteTheme>
      </Fragment>
    );
  }
}

export default {
  component: ContactPage,
};
