import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Section,
    Row,
    Column,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface ContactFormEmailProps {
    name: string;
    email: string;
    company: string;
    message: string;
  }
  
  export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
    name,
    email,
    company,
    message,
  }) => (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message from your website&apos;s contact form.
          </Text>
          <Section style={section}>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Name:</Text>
              </Column>
              <Column style={column}>
                <Text style={value}>{name}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column style={column}>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>
            <Row style={row}>
              <Column style={column}>
                <Text style={label}>Company:</Text>
              </Column>
              <Column style={column}>
                <Text style={value}>{company || 'Not provided'}</Text>
              </Column>
            </Row>
          </Section>
          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ContactFormEmail;
  
  const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
  };
  
  const h1 = {
    color: '#333',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
    textAlign: 'center' as const,
  };
  
  const text = {
    color: '#333',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    fontSize: '14px',
    margin: '24px 0',
  };
  
  const section = {
    padding: '0 48px',
  };
  
  const row = {
    display: 'flex' as const,
    marginBottom: '8px',
  };
  
  const column = {
    flex: '1',
    paddingRight: '8px',
  };
  
  const label = {
    color: '#9ca299',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    marginBottom: '4px',
  };
  
  const value = {
    color: '#333',
    fontSize: '14px',
    margin: '0',
  };
  
  const messageStyle = {
    color: '#333',
    fontSize: '14px',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
  };