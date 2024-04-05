export async function setItemLocaly(key: string, value: string) {
  localStorage.setItem(`@adsales:${key}`, value)
}

export async function getItemLocaly(key: string): Promise<string | null> {
  return localStorage.getItem(`@adsales:${key}`)
}
