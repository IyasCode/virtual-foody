import React from "react";

import MenuOutput from "./MenuOutput/MenuOutput";

const menusOutput = (props) => {
  const choiceOfMenu = Object.values(props.choiceOfMenu).map((menu, index) => {
    return (
      <MenuOutput
        to={menu.path}
        key={menu.type + index}
        menuOutputImage={menu.image()}
        menuType={menu.type}
      />
    );
  });

  return choiceOfMenu;
};

export default menusOutput;
