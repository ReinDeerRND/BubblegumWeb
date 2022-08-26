import { reduxForm } from 'redux-form';
import classes from './Login.module.css';
import { createControl, InputControl } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/reducers/authReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createControl(InputControl, "login", "Login", [requiredField],  {autoFocus: true})}
            {createControl(InputControl, "password", "Password", [requiredField], { type: "password"})}
            {createControl(InputControl, "isRemember", null, [], { type: "checkbox"}, "Remember me")}
            <div className={classes.common_error}>{error}</div>
            <div className={classes.field}>
                <button type="submit">Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.isRemember)
    }
    if (props.isLogged) {
        return <Redirect to="/profile" />
    }
    return (
        <div className={classes.container}>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }

}
export default connect(mapStateToProps, { login, logout })(Login);