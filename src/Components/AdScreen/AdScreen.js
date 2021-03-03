import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./AdScreen.module.css";
// import noSignalImg from "../../assets/images/adScreen/no-signal.png";
// import ad1Img from "../../assets/images/adScreen/advertisement-1.png";
// import ad2Img from "../../assets/images/adScreen/advertisement-2.png";
import * as globalActions from "../../globalStore/actions/globalActions";

const AdScreen = (props) => {
  const noSignal = useSelector((state) => state.global.noSignal);
  const dispatch = useDispatch();
  let [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: globalActions.NO_SIGNAL });
    }, 2000);

    const start = setInterval(() => {
      setCount(count++);
    }, 4000);

    return () => clearInterval(start);
  }, [count, dispatch]);

  return noSignal ? (
    <img
      className={classes.AdScreen}
      src={
        "https://scontent.fsin8-1.fna.fbcdn.net/v/t1.0-9/152800873_103433441804733_4298370181835955859_n.jpg?_nc_cat=108&ccb=3&_nc_sid=0debeb&_nc_ohc=pRsg3gX9VzYAX-DTzvy&_nc_ht=scontent.fsin8-1.fna&oh=829ee3c5b0d8b81ac1f143d36655a9b5&oe=606016EB"
      }
      alt="no signal"
    />
  ) : count % 2 === 0 ? (
    <img
      className={classes.AdScreen}
      src={
        "https://scontent.fsin8-1.fna.fbcdn.net/v/t1.0-9/153134206_103430411805036_8259288519790667483_n.jpg?_nc_cat=108&ccb=3&_nc_sid=0debeb&_nc_ohc=1BLFt8a53sMAX_RdDRK&_nc_ht=scontent.fsin8-1.fna&oh=daed4598562bb04c43073ab6c0ea9874&oe=605F8F46"
      }
      alt="advertisement 1"
    />
  ) : (
    <img
      className={classes.AdScreen}
      src={
        "https://scontent.fsin8-2.fna.fbcdn.net/v/t1.0-9/149354431_103430418471702_4115206880573121125_n.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_ohc=qV-3EQMQkmMAX-aalOZ&_nc_ht=scontent.fsin8-2.fna&oh=b96f0cb90397d0a8cd49270d6a5927c2&oe=60608A4A"
      }
      alt="advertisement 2"
    />
  );
};

export default AdScreen;
