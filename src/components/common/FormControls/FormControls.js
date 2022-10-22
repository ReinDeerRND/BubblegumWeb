import classes from './FormControls.module.css';
import { Field } from 'redux-form';

export const TextareaControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <textarea {...input} {...props} className={classes.textarea} />
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}

export const InputControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <input {...input} {...props} />
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}

export const createControl = (componentType, name, placeholder, validators, props, text = "") => {
    let style = props?.type === "checkbox" ? classes.field : classes.field + " " + classes.checkbox
    return (
        <div className={style}>
            <Field component={componentType} name={name} placeholder={placeholder} validate={validators}  {...props} /> 
            <span className={classes.field_span}>{text}</span>
        </div>
    )
}