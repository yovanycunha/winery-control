import { useRef } from 'react';
import styles from './Container.module.scss';

const Container = props => {
  const containerClass = [styles.section];
  const contentRef = useRef(null);

  const renderDiv = () => (
    <div className={containerClass.join(' ')}>{props.children}</div>
  );

  const renderContent = () => (
    <div className={containerClass.join(' ')}>{props.children}</div>
  );

  const renderSection = () => {
    <section
      id={props.id}
      className={containerClass.join(' ')}
      ref={contentRef}
    >
      {renderContent()}
    </section>;
  };

  if (props.className) containerClass.push(props.className);

  return props.id ? renderSection() : renderDiv();
};

export default Container;
