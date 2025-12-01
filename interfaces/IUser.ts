export interface IUser {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export function isIUser(data: unknown): data is IUser {
  return (
    data !== null &&
    typeof data === 'object' &&
    'user_id' in data &&
    'first_name' in data &&
    'last_name' in data &&
    'email' in data &&
    'username' in data &&
    'password' in data &&
    'created_at' in data &&
    'updated_at' in data &&
    typeof data.user_id === 'number' &&
    typeof data.first_name === 'string' &&
    typeof data.last_name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.username === 'string' &&
    typeof data.password === 'string' &&
    typeof data.created_at === 'string' &&
    typeof data.updated_at === 'string'
  );
}

export function isIUserArray(data: unknown): data is IUser[] {
  return Array.isArray(data) && data.every(isIUser);
}