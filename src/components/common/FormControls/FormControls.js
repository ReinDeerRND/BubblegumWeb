import classes from './FormControls.module.css';

export const TextareaControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.form_control + " " + (hasError? classes.error: "")}>
            <textarea {...input} {...props} className={classes.textarea} />
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}
