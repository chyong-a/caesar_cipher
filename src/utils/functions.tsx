export const processText = (
  mode: string,
  characters: string,
  shiftNumber: number,
  text: string
) => {
  let result = text.split("");
  for (let i = 0; i < text.length; i++) {
    const lowerCaseChar = text[i].toLowerCase();
    if (characters.includes(lowerCaseChar)) {
      const isInLowerCase = lowerCaseChar == text[i];
      const currentIndex = characters.indexOf(lowerCaseChar);
      let newIndex = currentIndex;
      if (mode === "encode") {
        newIndex = handleEncodeIndex(currentIndex, shiftNumber, characters);
      } else {
        newIndex = handleDecodeIndex(currentIndex, shiftNumber, characters);
      }

      result[i] = isInLowerCase
        ? characters[newIndex].toLowerCase()
        : characters[newIndex].toUpperCase();
    }
  }
  return result.join("");
};

const handleEncodeIndex = (
  currentIndex: number,
  shiftNumber: number,
  characters: string
) => {
  let newIndex = currentIndex + shiftNumber;
  if (newIndex > characters.length - 1) {
    newIndex = newIndex % characters.length;
  }
  return newIndex;
};

const handleDecodeIndex = (
  currentIndex: number,
  shiftNumber: number,
  characters: string
) => {
  let newIndex = currentIndex - shiftNumber;
  if (newIndex < 0) {
    newIndex = characters.length - newIndex * -1;
  }
  return newIndex;
};
