import crypto from "crypto";

const passwordCheck = (currentPassword, hashedPassword) => {
  const allAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrayAllAphabet = allAlphabet.split("");

  for (let alphabet of arrayAllAphabet) {
    const hashPassword = crypto
      .createHmac("sha256", alphabet)
      .update(currentPassword)
      .digest("hex");
    if (hashPassword === hashedPassword) {
      return true;
    }
  }

  return false;
};

export default passwordCheck;
