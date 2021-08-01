const findPhoneNumber = (text) => {
  const regex = /\d{3}-\d{3}-\d{4}/g;
  const result = text.match(regex);
  return result;
};

const findDateFormat = (text) => {
  const regex = new RegExp(
    /^\d{4}[\/-](0[1-9]|1[012])[\/-](0[1-9]|[12][0-9]|3[01])$/g
  );
  const result = text.match(regex);
  // const resultReg = regex.exec(text);
  return result;
};

console.log(findPhoneNumber('085-546-5648'));
console.log(findDateFormat('2021-08-01'));
