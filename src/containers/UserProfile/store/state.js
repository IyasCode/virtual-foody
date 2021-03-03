const state = {
  user: {
    name: null,
    email: null,
    password: null,
    address: null,
    city: null,
    postal: null,
    phone: null,
  },
  inputName: null,
  loading: {
    name: false,
    password: false,
    others: false,
  },
  buttonDisabled: {
    name: true,
    password: true,
    others: true,
  },
  password: {
    current: "",
    new: "",
    confirm: "",
  },
  passwordStatus: null,
  updateStatus: {
    password: false,
    others: false,
  },
  error: "",
};

export default state;
