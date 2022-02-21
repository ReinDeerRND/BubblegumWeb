import { connect } from "react-redux";
import React from "react";
import { getAuthThunkCreator } from "../../redux/reducers/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthThunkCreator();
  }

  render() {
    return (<Header {...this.props} />);
  }

}

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    login: state.auth.login,
  }
}
export default connect(mapStateToProps, { getAuthThunkCreator })(HeaderContainer);