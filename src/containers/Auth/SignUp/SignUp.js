import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormOutput from "../../../Components/Form/FormOutput/FormOutput";
import SignUpForm from "../../../Components/Form/SignUpForm/SignUpForm";
import UserDetailForm from "../../../Components/Form/UserDetailForm/UserDetailForm";
import FormWrapper from "../../../hoc/FormWrapper/FormWrapper";
import Aux from "../../../hoc/Auxileries";
import * as actionTypes from "../store/actions/actionTypes";
import * as actions from "../store/actions/auth";
import Loading from "../../../Components/UI/Loading/Loading";
import validateEmail from "../../../utilities/validateEmail/validateEmail";

const SignUp = (props) => {
  const [slideLayout, setSlideLayout] = useState(false);
  const user = useSelector((state) => state.signUp.user);
  const check = useSelector((state) => state.signUp.check);
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.auth.loading);
  const globalDispatch = useDispatch();

  useEffect(() => {
    if (auth.id) {
      props.history.replace({
        pathname: "/",
      });
    }
  }, [auth.id, props, check]);

  const changeLayoutHandler = (event) => {
    event.preventDefault();
    setSlideLayout(!slideLayout);
  };

  const signUpClickHandler = (event) => {
    event.preventDefault();
    const localCheck = {};

    localCheck.name = user.name.length > 0 ? true : false;
    localCheck.email = validateEmail(user.email);
    localCheck.password = user.password > 5 ? true : false;
    localCheck.confirm = user.password === user.confirm ? true : false;
    localCheck.phone = user.phone.length >= 10 ? true : false;

    globalDispatch({ type: actionTypes.SIGN_UP_ON_CHECK });

    if (
      localCheck.name &&
      localCheck.email &&
      localCheck.password &&
      localCheck.confirm &&
      localCheck.phone
    ) {
      globalDispatch(
        actions.auth(
          user.email,
          user.password,
          actionTypes.SIGN_UP,
          user.name,
          user.address,
          user.city,
          user.postal,
          user.phone
        )
      );
    } else {
      setSlideLayout(false);
    }
  };

  const onChangeHandler = (event) => {
    globalDispatch({
      type: actionTypes.ON_CHANGE,
      event: event,
    });
  };

  return (
    <Aux>
      <FormOutput>
        {loading ? (
          <Loading marginTop="65px" marginBottom="65px" />
        ) : (
          <FormWrapper>
            <SignUpForm
              nextClicked={changeLayoutHandler}
              slide={slideLayout}
              onChange={onChangeHandler}
              value={user.name}
            />

            <UserDetailForm
              backClicked={changeLayoutHandler}
              slide={!slideLayout}
              onChange={onChangeHandler}
              signUpClicked={signUpClickHandler}
            />
          </FormWrapper>
        )}
      </FormOutput>
    </Aux>
  );
};

export default SignUp;

// class SignUp extends Component {
//   state = {
//     slideLayout: false,
//   };

//   changeLayoutHandler = (event) => {
//     event.preventDefault();
//     this.setState({ slideLayout: !this.state.slideLayout });
//   };

//   signUpClickHandler = (event) => {
//     event.preventDefault();
//     this.props.onAuth(
//       this.props.user.email,
//       this.props.user.password,
//       actionTypes.SIGN_UP,
//       this.props.user.name,
//       this.props.user.address,
//       this.props.user.city,
//       this.props.user.postal,
//       this.props.user.phone,
//       this.props
//     );
//   };

//   render() {
//     return (
//       <Aux>
//         <FormOutput>
//           <FormWrapper>
//             <SignUpForm
//               nextClicked={this.changeLayoutHandler}
//               slide={this.state.slideLayout}
//               onChange={this.props.onChangeHandler}
//               value={this.props.user.name}
//             />

//             <UserDetailForm
//               backClicked={this.changeLayoutHandler}
//               slide={!this.state.slideLayout}
//               onChange={this.props.onChangeHandler}
//               signUpClicked={this.signUpClickHandler}
//             />
//           </FormWrapper>
//         </FormOutput>
//       </Aux>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.signUp.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeHandler: (event) =>
//       dispatch({
//         type: actionTypes.ON_CHANGE,
//         event: event,
//       }),
//     onAuth: (
//       email,
//       password,
//       method,
//       name,
//       address,
//       city,
//       postal,
//       phone,
//       props
//     ) =>
//       dispatch(
//         actions.auth(
//           email,
//           password,
//           method,
//           name,
//           address,
//           city,
//           postal,
//           phone,
//           props
//         )
//       ),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
