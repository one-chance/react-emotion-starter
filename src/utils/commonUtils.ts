export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastFunc: ReturnType<typeof setTimeout> | null;
  let lastRan: number;

  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(null, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc as ReturnType<typeof setTimeout>);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(null, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}

export const capitalizeEachWord = (text: string) => {
  const tempText = text.replace(/-/g, ' ');

  return tempText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
