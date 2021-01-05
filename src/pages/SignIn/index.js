import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Typography } from 'antd';

import AuthActions from '~/store/ducks/auth';
import { Container } from './styles';

const { Title } = Typography;

const SignIn = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSignIn = async (values) => {
    dispatch(AuthActions.signInRequest(values));
  };

  return (
    <Container>
      <Title level={1}>Login</Title>
      <Form
        scrollToFirstError
        layout="vertical"
        name="register-user"
        form={form}
        onFinish={handleSignIn}
      >
        <Form.Item
          name="email"
          label="Email:"
          rules={[
            {
              required: true,
              message: 'Campo obrigatório!',
            },
            {
              min: 0,
              type: 'email',
              message: 'Digite um email válido!',
            },
          ]}
          hasFeedback
        >
          <Input type="text" placeholder="Nome completo do usuário" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Senha:"
          rules={[
            {
              required: true,
              message: 'Campo obrigatório!',
            },
            {
              min: 6,
              message: 'Mínimo de 6 caracteres!',
            },
          ]}
        >
          <Input.Password placeholder="Senha do usuário" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
