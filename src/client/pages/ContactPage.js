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
} from '../themes/base';

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

const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  label {
    display: block;
    margin: 0 auto;
  }

  input[type="text"],
  input[type="email"],
  input[type="number"] {

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
        <label htmlFor={FORM_NAME}>
          {FORM_NAME}
          <input
            type="text"
            name={FORM_NAME}
            id={FORM_NAME}
            value={name}
            onChange={this.onChange('name')}
          />
        </label>
        <label htmlFor={FORM_PHONE}>
          {FORM_PHONE}
          <input
            type="number"
            name={FORM_PHONE}
            id={FORM_PHONE}
            value={phone}
            onChange={this.onChange('phone')}
          />
        </label>
        <label htmlFor={FORM_EMAIL}>
          {FORM_EMAIL}
          <input
            type="email"
            name={FORM_EMAIL}
            id={FORM_EMAIL}
            value={email}
            onChange={this.onChange('email')}
          />
        </label>
        <label htmlFor={FORM_TITLE}>
          {FORM_TITLE}
          <input
            type="text"
            name={FORM_TITLE}
            id={FORM_TITLE}
            value={title}
            onChange={this.onChange('title')}
          />
        </label>
        <label htmlFor={FORM_BODY}>
          {FORM_BODY}
          <textarea
            id={FORM_BODY}
            name={FORM_BODY}
            value={message}
            onChange={this.onChange('message')}
          />
        </label>
        <input type="submit" value={FORM_SEND} />
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
            <Container height="40vh" noMargin>
              <Map />
            </Container>
            <Container margin={getMargin('lg')}>
              <Row>
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
                      <A href="mailto:foo@bar.com">foo@bar.com</A>
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
