// import { } from '../FirebaseDB';

export const checkLogin = () => {
  return {
    type: 'changeStatus',
    payload: {
      status: 2
    }
  };
};