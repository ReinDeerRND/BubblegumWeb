import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.field}>
                <Field component="input" name = "login" placeholder="Login" />
            </div>
            <div className={classes.field}>
                <Field component="input" name = "password"  placeholder="Password" />
            </div>
            <div className={classes.field}>
                <Field component="input" name = "isRemember" type="checkbox" /> Remember me
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

const Login = () => {
    const onSubmit = (formData)=>{
        console.log(formData);
    }
    return (
        <div className={classes.container}>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;