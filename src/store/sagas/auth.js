import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';
import { notification } from 'antd';
import AuthActions from '../ducks/auth';

export function* signIn({ params }) {
  try {
    console.log(params);
    localStorage.setItem('@reactBase:token', 'token ;D');
    yield put(AuthActions.signInSuccess('token ;D'));

    notification.success({
      message: 'Seja bem vindo!',
      description: 'John Doe',
      placement: 'bottomLeft',
    });

    return yield put(push('/home'));
  } catch (err) {
    return notification.error({
      message: 'Ocorreu um erro!',
      description: 'descrição',
    });
  }
}

export function* signOut() {
  try {
    localStorage.removeItem('@reactBase:token');
    yield put(AuthActions.signOutSuccess());

    notification.success({
      message: 'Até mais.',
      description: 'John Doe',
      placement: 'bottomLeft',
    });

    return yield put(push('/'));
  } catch (err) {
    return notification.error({
      message: 'Ocorreu um erro!',
      description: 'descrição',
    });
  }
}
