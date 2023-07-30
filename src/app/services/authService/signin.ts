import { httpClient } from '../httpClient';

interface SignupParams {
  email: string;
  password: string;
}

export async function signin(params: SignupParams) {
  const { data } = await httpClient.post<{ accessToken: string }>('/auth/signin', params);

  return data;
}
