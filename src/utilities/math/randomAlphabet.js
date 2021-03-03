const randomAlphabet = () => {
  const allAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomNum = Math.floor(Math.random() * 52);
  const arrayAllAphabet = allAlphabet.split("");

  return arrayAllAphabet[randomNum];
};

export default randomAlphabet;
