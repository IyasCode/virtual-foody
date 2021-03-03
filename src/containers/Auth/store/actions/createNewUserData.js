import firebase from "firebase";

const createNewUserData = (
  response,
  name,
  email,
  password,
  address,
  city,
  postal,
  phone
) => {
  firebase
    .database()
    .ref("users/" + response.user.uid)
    .set({
      details: {
        name: name,
        email: email,
        password: password,
        address: address,
        city: city,
        postal: postal,
        phone: phone,
      },
      orders: {},
    });
};

export default createNewUserData;
