export interface Credentials {
  login: string;
  password: string;
}

const VALID: Credentials = { login: 'user@example.com', password: 'password' };

export function isValid(login: string, pwd: string) {
  return login === VALID.login && pwd === VALID.password;
}
