import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Title } from 'components/atoms/Title/Title.styles';
import Button from 'components/atoms/Button/Button';
import { UserContext } from 'providers/UsersProvider';
import { useWindowHeight } from 'hooks/useWindowSize';
import { useForm } from 'hooks/useForm';

const initialStateForm = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UserContext);
  const {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleConsentToggle,
  } = useForm(initialStateForm);
  const dimensions = useWindowHeight();

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm();
    } else {
      handleThrowError('You need to give consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add user</Title>
      <Title>Height: {dimensions.height}px</Title>
      <Title>Width: {dimensions.width}px</Title>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => handleConsentToggle()}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
