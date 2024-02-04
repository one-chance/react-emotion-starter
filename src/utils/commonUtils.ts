export const capitalizeEachWord = (text: string) => {
  const tempText = text.replace(/-/g, ' ');

  return tempText
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
