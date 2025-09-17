import { loremIpsum } from "lorem-ipsum";

// const generateWord = () => {
//   return loremIpsum({
//     count: 1,
//     units: "word",
//   });
// };

//? first method to lendthy
// const generateSentence = () => {
//   const words = [];
//   for (let i = 0; i <= 5; i++) {
//     words.push(generateWord());
//   }
//   return words.join(' ') + '.';
// };
//? best pratice
// const generateSentence = () => {
//   return (
//     Array.from(
//       { length: Math.floor(Math.random() * (15 - 3 + 1) + 3) },
//       generateWord
//     ).join(" ") + "."
//   );
// };

// console.log(generateSentence());

const generateDumyText = (words, paragraph) => {
  const sentence = Math.floor(Math.random() * (5 - 3 + 1) + 3);
  const generateWord = () => {
    return loremIpsum({
      count: 1,
      units: "word",
    });
  };

  const generateSentence = () => {
    return Array.from({ length: words < 5 ? 5 : words }, generateWord).join(" ") + ".";
  };
  const generateParagraph = () => {
    return Array.from({ length: sentence }, generateSentence).join(" ");
  };

  return Array.from({ length: paragraph }, generateParagraph);
};
export default generateDumyText