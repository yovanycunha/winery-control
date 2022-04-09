import styles from './Input.module.scss';

function Input(props) {
  const containerClass = [styles.container];
  const labelClass = [styles.label];
  const inputClass = [styles.input];
  const fieldsetClass = [styles.fieldset];
  const legendClass = [styles.legend];

  return (
    <div className={containerClass.join(' ')}>
      <div className={styles.wrapper}>
        <label htmlFor={props.name} className={labelClass.join(' ')}>
          {props.placeholder}
        </label>
        <input
          type={props.type}
          id={props.name}
          name={props.name}
          className={inputClass.join(' ')}
        />
        <fieldset aria-hidden="true" className={fieldsetClass.join(' ')}>
          <legend className={legendClass.join(' ')}>
            <span className={styles.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
}

export default Input;
