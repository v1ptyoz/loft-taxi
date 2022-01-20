const messages = {
  required: "Поле обязательно для заполнения",
  wrong: "Неверно заполнено поле",
  minLen: (value) => `Минимальная длина - ${value} ${prefixier(value)}`,
  maxLen: (value) => `Максимальная длина - ${value} ${prefixier(value)}`
}

const prefixier = (value) => {
  const n = value % 10;
  if (n > 10 && n < 20) {
      return 'символов';
  }
  if (n > 1 && n < 5) {
      return 'символа';
  }
  if (n === 1) {
      return 'символ';
  }
  return 'символов';
}

export default messages;