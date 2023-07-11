import React from 'react';
import '../../../dist/css/contact.css';
import { useFormik } from 'formik';
import { BiSolidError } from 'react-icons/bi';
import { TextField, TextFieldProps, TextFieldVariants } from '@mui/material';
import validationSchema from '../../utils/formValidation';
import { CapitilizeFirstChar } from '../../utils/functions';

interface IinitialValue {
  name: string;
  email: string;
  message: string;
}

const initialValues: IinitialValue = {
  name: '',
  email: '',
  message: '',
};
const INPUTS_CATEGORIES = ['name', 'email', 'message'];

function Contact() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  const {
    handleBlur,
    handleChange,
    touched,
    values,
    errors,
    handleSubmit,
    isSubmitting,
  } = formik;

  const inputProps = (inputType: keyof IinitialValue): TextFieldProps => {
    const labelText = CapitilizeFirstChar(inputType);
    return {
      id: inputType,
      // label: labelText,
      placeholder: `Enter your ${labelText}`,
      variant: 'filled' as TextFieldVariants,
      onBlur: handleBlur,
      value: values[inputType],
      onChange: handleChange,
      error: !!(touched[inputType] && errors[inputType]),
      fullWidth: true,
      className: 'contact-form-input',
      InputProps: {
        style: {
          color: '#333',
          fontWeight: 549,
        },
      },
    };
  };
  const displayInputError = (inputType: keyof IinitialValue) => {
    return touched[inputType] && errors[inputType] ? (
      <div className="contact-form-error">
        <BiSolidError />
        <p>{errors[inputType]}</p>
      </div>
    ) : null;
  };

  const displayFormInputs = INPUTS_CATEGORIES.map((category: string) => {
    const inputTypeText = CapitilizeFirstChar(category);

    const displayInputField =
      category === 'message' ? (
        <TextField
          multiline
          rows={4}
          sx={
            {
              // '& fieldset': { border: 'none' },
            }
          }
          {...inputProps(category as keyof IinitialValue)}
        />
      ) : (
        <TextField
          sx={
            {
              // '& fieldset': { border: 'none' },
            }
          }
          {...inputProps(category as keyof IinitialValue)}
        />
      );

    return (
      <span key={category} className="contact-form-input-container">
        <h1>{inputTypeText}</h1>
        {displayInputField}
        {displayInputError(category as keyof IinitialValue)}
      </span>
    );
  });

  return (
    <div className="contact">
      <h1 className="contact-title">
        Contact <span className="marker">Me</span>
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        {displayFormInputs}
        <button
          type="submit"
          disabled={isSubmitting}
          className="contact-form-submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
