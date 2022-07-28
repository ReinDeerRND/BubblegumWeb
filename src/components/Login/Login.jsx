import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';
import { InputControl } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.field}>
                <Field component={InputControl} name = "login" placeholder="Login" validate={[requiredField]}/>
            </div>
            <div className={classes.field}>
                <Field component={InputControl} name = "password"  placeholder="Password" validate={[requiredField]} />
            </div>
            <div className={classes.field + " " + classes.checkbox }>
                <Field component={InputControl} name = "isRemember" type="checkbox" /> Remember me
            </div>
            <div className={classes.field }>
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