const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "A woman's face with Nature's own hand paintedr 1.",
      "A woman's face with Nature's own hand painted awesome quote.",
      "Yet ano With shifting change, as is false women's fashion;ther great quote.",
      "A woman's face with Nature's own hand paintedst quote.",
      " An eye more bright than theirs, less false in rolling",
      " Much steals men's eyes and women's souls amazeth.",
      " Mine be thy love and thy love's use their treasure.",
      "How heavy do I journey on the way",
      "When what I seek, my weary travel's end",
      "Doth teach that ease and that repose to say",
      "'Thus far the miles are measured from thy friend!'",
      "The beast that bears me, tired with my woe",
      "Plods dully on, to bear that weight in me",
      "As if by some instinct the wretch did know",
      "His rider loved not speed, being made from thee:",
      "The bloody spur cannot provoke him on",
      "That sometimes anger thrusts into his hide;",
      "Which heavily he answers with a groan",
      "More sharp to me than spurring to his side;",
      "For that same groan doth put this in my mind;",
      "My grief lies onward and my joy behind.",
      "The little Love-god lying once asleep",
      "Laid by his side his heart-inflaming brand",
      "Whilst many nymphs that vow'd chaste life to keep",
      "Came tripping by; but in her maiden hand",
      "The fairest votary took up that fire",
      "Which many legions of true hearts had warm'd;",
      "And so the general of hot desire",
      "Was sleeping by a virgin hand disarm'd.",
      "This brand she quenched in a cool well by,",
      "Which from Love's fire took heat perpetual",
      "Growing a bath and healthful remedy",
      "For men diseased; but I, my mistress' thrall",
      "Came there for cure, and this by that I prove",
      "Love's fire heats water, water cools not love."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;