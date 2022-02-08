import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header_wrapper}>
      <img className={classes.header_img} src="https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png" alt="logo" />
      <div className={classes.login_container}>
        {props.isLogged ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
}

export default Header;