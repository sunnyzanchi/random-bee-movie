function getRandomConsecutiveSentences(text, length) {
  const xSentence = /((?:.|\n)*?(?:\.\n|\!\n|\?\n))/gm;
  const numberOfSentences = text.match(xSentence).length;
  //We generate a random number to use to get sentences a random length into the text
  const startPercent = Math.trunc(Math.random() * 100);

  var startPoint = Math.round(numberOfSentences * (startPercent / 100));

  if(length > numberOfSentences)length = numberOfSentences;
  if(startPoint > numberOfSentences - length)startPoint = numberOfSentences - length;

  var result = [];
  for (let i = 0; i < length; i++) {
      result.push(text.match(xSentence)[startPoint + i]);
  }
  return result;
}

module.exports = getRandomConsecutiveSentences;
