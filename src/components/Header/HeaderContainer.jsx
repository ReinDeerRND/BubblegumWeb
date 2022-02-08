import { connect } from "react-redux";
import React from "react";
import { setAuthUserData } from "../../redux/reducers/authReducer";
import { getAuth } from "../../api/api";
import Header from "./Header";


class HeaderContainer extends React.Component {

  componentDidMount() {
    getAuth().then(res => {
      if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);