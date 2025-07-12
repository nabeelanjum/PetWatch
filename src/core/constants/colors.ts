const colors = {
  monochrome: {
    white: '#FFFFFF',
    black: '#000000',
    '050': '#F6F8F8',
    '100': '#EBEBEB',
    '200': '#D0D0D0',
    '300': '#B9B9B9',
    '400': '#A2A2A2',
    '500': '#727272',
    '600': '#5B5B5B',
    '700': '#444444',
    '800': '#2A2A2A',
    '900': '#131313',
  },
  brand: {},
  font: {
    black: '#221F1F',
    lighter: '#4E4E4E',
    error: '#B3261E',
    light: '#3E3E3E',
    muted: '#676363',
  },
};

/** helper function to apply opacity to hex colors*/
export const applyOpacity = (hexColor: string, opacity: number): string => {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export default colors;
