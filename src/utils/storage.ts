export async function setItemLocaly (key: string, value: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`@exemplo:${key}`, value);
  }
};

export async function getItemLocaly (key: string): Promise<string | null> {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`@exemplo:${key}`);
  }

  return null;
};

export async function clearItems (
  keys: string[] = [
    'session',
    'token',
    'refreshToken',
    'username',
    'password',
    'lastSavedTokenTime',
  ],
): Promise<any> {
  keys.forEach(item => {
    localStorage.removeItem(`@exemplo:${item}`);
  });
};
