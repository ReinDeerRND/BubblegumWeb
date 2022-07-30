import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';
import { InputControl } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/reducers/authReducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.field}>
                <Field component={InputControl} name="login" placeholder="Login" validate={[requiredField]} />
            </div>
            <div className={classes.field}>
                <Field component={InputControl} name="password" placeholder="Password" validate={[requiredField]} type="password" />
            </div>
            <div className={classes.field + " " + classes.checkbox}>
                <Field component={InputControl} name="isRemember" type="checkbox" /> Remember me
            </div>
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