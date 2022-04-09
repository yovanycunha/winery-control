import styles from './Button.module.scss';

function Button(props) {
  const btnClass = [styles.btn];

  const handleClick = () => {
    console.log('click');
  };

  if (props.disabled) btnClass.push(styles.disabled);

  return (
    <button
      type={props.type === 'button' ? 'button' : 'submit'}
      className={btnClass.join(' ')}
      onClick={handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
