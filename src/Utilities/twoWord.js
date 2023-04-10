const twoWord = (word) => {
    const wordArr = word.split(" ");
    const twoWords = wordArr[0] + " " + wordArr[1];
    return twoWords;
};

export default twoWord;
