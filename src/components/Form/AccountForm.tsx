import FormWrapper from "./FormWrapper";

type AccountProps = {
  email: string
  password: string
}

type AccountFormProps = AccountProps & {
  updateFields: (fields: Partial<AccountProps>) => void
}

const AccountForm = ({email, password, updateFields}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input required type="text" value={email} onChange={e => updateFields({email: e.target.value})} />
      <label>Password</label>
      <input required type="text" value={password} onChange={e => updateFields({password: e.target.value})} />
    </FormWrapper>
  );
};

export default AccountForm;