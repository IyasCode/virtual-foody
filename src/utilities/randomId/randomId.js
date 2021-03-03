const randomId = (number) => {
  const acceptableInput =
    "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrayInput = acceptableInput.split("");
  let newId = "";

  for (let i = 0; i < number; i++) {
    const randomNumber = Math.floor(Math.random() * 60);
    newId += arrayInput[randomNumber];
  }

  return newId;
};

export default randomId;
