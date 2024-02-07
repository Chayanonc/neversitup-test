// 1.
// https://github.com/Chayanonc/neversitup-backend/

// 2.
const shufflings = (text: string) => {
  if (text.length == 1) return [text];

  const results: Record<string, string> = {};

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      const textArr = text.split("");
      const textTemp = textArr.splice(i, 1).join();
      textArr.splice(j, 0, textTemp);
      results[textArr.join("")] = textArr.join();
      results[textArr.reverse().join("")] = textArr.reverse().join("");
    }
  }

  return Object.keys(results).sort();
};

// 3.
const findWhichIsOdd = (numbers: number[]): number => {
  const countNum: Record<number, number> = {};
  numbers.forEach((num) => {
    countNum[num] = countNum[num] ? countNum[num] + 1 : 1;
  });

  const result = Object.keys(countNum).find((val: string, index: number) => {
    if (countNum[+val] % 2 !== 0) return val;
  });

  return result ? parseInt(result) : 0;
};

// 4.
const countSmile = (smiles: string[]): number => {
  const validSmile = /^(?:\:|\;)(?:-|~)?(?:\)|D)$/;
  return smiles.filter((val) => val.match(validSmile)).length;
};

export { shufflings, countSmile, findWhichIsOdd };
