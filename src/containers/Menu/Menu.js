import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Aux from "../../hoc/Auxileries";
import { fetchUserData } from "../../userStore/action/fetchUserData";
import MenuLayout from "../../Components/MenuLayout/MenuLayout";
import MenuBurgerImage from "../../Components/MenuImages/Burger/Burger";
import MenuBeverageImage from "../../Components/MenuImages/Beverage/Beverage";
import MenuPizzaImage from "../../Components/MenuImages/Pizza/Pizza";

export const StateContext = React.createContext();

const Menu = (props) => {
  const auth = useSelector((state) => state.auth);
  const globalDispatch = useDispatch();

  const orderAvailable = {
    beverage: {
      path: "beverage",
      image: () => <MenuBeverageImage />,
      type: "Beverage",
      imageAlt: "this is the beverage pic",
    },
    burger: {
      path: "burger",
      image: () => <MenuBurgerImage />,
      type: "Burger",
      imageAlt: "this is the burger pic",
    },
    pizza: {
      path: "pizza",
      image: () => <MenuPizzaImage />,
      type: "Pizza",
      imageAlt: "this is the pizza pic",
    },
  };

  useEffect(() => {
    if (auth.id) {
      globalDispatch(fetchUserData(auth.id));
    }
  }, [auth.id, globalDispatch]);

  return (
    <StateContext.Provider value={globalDispatch}>
      <Aux>
        <MenuLayout choiceOfMenu={orderAvailable} />
      </Aux>
    </StateContext.Provider>
  );
};

export default Menu;
