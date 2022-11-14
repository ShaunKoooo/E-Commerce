import {ReactNode} from 'react';
import styles from './form.module.scss';

type FormWrapperProps = {
  title: string
  children: ReactNode
};

const FormWrapper = ({title, children}: FormWrapperProps) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default FormWrapper;