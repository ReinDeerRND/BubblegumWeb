import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header_wrapper}>
      <img className={classes.header_img} src="https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png" alt="logo" />
    </div>
  );
}
export default Header;