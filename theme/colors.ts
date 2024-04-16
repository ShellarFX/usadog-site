import twColors from 'tailwindcss/colors.js';

export function swapColorValues<T extends Object>(colors: T) {
  const swappedColors = {};
  const keys = Object.keys(colors);
  const length = keys.length;

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i];
    const key2 = keys[length - 1 - i];

    // @ts-ignore
    swappedColors[key1] = colors[key2];
    // @ts-ignore
    swappedColors[key2] = colors[key1];
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)];

    // @ts-ignore
    swappedColors[middleKey] = colors[middleKey];
  }

  return swappedColors;
}

export const lightColors = {
  default: { DEFAULT: twColors.zinc[300], ...twColors.zinc },
  primary: twColors.amber,
  error: twColors.red,
  success: twColors.green,
  warning: twColors.amber,

  content1: twColors.zinc[50],
  content2: twColors.zinc[100],
  content3: twColors.zinc[200],
  content4: twColors.zinc[300],

  background: twColors.white,
};

export const darkColors = {
  default: { DEFAULT: twColors.zinc[700], ...swapColorValues(twColors.zinc) },
  primary: swapColorValues(twColors.amber),
  error: swapColorValues(twColors.red),
  success: swapColorValues(twColors.green),
  warning: swapColorValues(twColors.amber),

  content1: twColors.zinc[900],
  content2: twColors.zinc[800],
  content3: twColors.zinc[700],
  content4: twColors.zinc[600],

  foreground: "#B31942",
  foreground2: "#3A57C9",
  background: "#100b3a",
};