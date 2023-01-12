import axios from 'axios';
import { IUser } from '../interfaces/user.interface';

// const apiClient = axios.create({
//   baseURL: 'https://api-taskaccio.onrender.com/api/auth',
//   headers: {
//     'Content-type': 'application/json',
//   },
//   withCredentials: true,
//   mo
// });

export const registerUser = async ({ email, password }: IUser) => {
  // try {
  //   const response = await apiClient.post<any>('/register', {
  //     email,
  //     password,
  //   });
  //   return response.data;
  // } catch (err) {
  //   console.log(err);
  // }

  try {
    const response = await fetch(
      'https://api-taskaccio.onrender.com/api/auth/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
        mode: 'no-cors',
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
