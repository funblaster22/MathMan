export default function debounce<T>(callback: (...args: T[]) => void, wait = 300) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<typeof callback>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), wait);
  };
}
