export default function debounce<T extends (...args: any[]) => any>(
  func: T,
  waitFor: number,
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<T>) => ReturnType<T>;
}
