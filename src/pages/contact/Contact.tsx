import React from 'react';
import '../../utils/css/contact.min.css';
import { useFormik } from 'formik';
import { BiSolidError } from 'react-icons/bi';
import { TextField, TextFieldProps, TextFieldVariants } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import validationSchema from '../../utils/formValidation';
import { CapitilizeFirstChar } from '../../utils/functions';

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const API_KEY_PUBLIC = import.meta.env.VITE_API_KEY_PUBLIC;
const API_TAMPLATE_ID = import.meta.env.VITE_API_TAMPLATE_ID;
const API_SERVICE_ID = import.meta.env.VITE_API_SERVICE_ID;
const INPUTS_CATEGORIES = ['name', 'email', 'message'];

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

function Contact() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (formik.isValid && formik.dirty) {
        const loadingToastId = toast.loading('Sending Email...');
        try {
          await axios.post(EMAILJS_URL, {
            service_id: API_SERVICE_ID,
            template_id: API_TAMPLATE_ID,
            user_id: API_KEY_PUBLIC,
            template_params: values,
          });
          toast.success('Email sent succsessfully!', {
            id: loadingToastId,
          });
          resetForm();
        } catch {
          toast.error('Something went wrong please try again later', {
            id: loadingToastId,
          });
        }
      }
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
          {...inputProps(category as keyof IinitialValue)}
        />
      ) : (
        <TextField {...inputProps(category as keyof IinitialValue)} />
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
