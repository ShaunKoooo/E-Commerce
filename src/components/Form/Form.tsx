import { FormEvent, useEffect, useState } from 'react';
import useMutiStepForm from '../../hooks/useMutiStepForm';
import AccountForm from './AccountForm';
import Address from './Address';
import styles from './form.module.scss';
import UserForm from './UserForm';

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);

  // Partial<> 部分的 FormData (optional)
  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      // 取得前一次的 props，然後覆蓋這次填入的 fields
      return {...prev, ...fields};
    });
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMutiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <Address {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ]);

  const atOnSubmit = (e: FormEvent) => {
    console.log(e)
    e.preventDefault();
    next();
    // do
    // console.log('submit data')
  };

  useEffect(() => {
    console.log('aaa')
  })

  return (
    <div className={styles.formContainer}>
      <form onSubmit={atOnSubmit}>
        <div className={styles.step}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className={styles.stepButtonContainer}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button>
            {isLastStep ? "Finished" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;