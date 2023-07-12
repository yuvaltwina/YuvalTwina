import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name.')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces.')
    .min(2, 'Name should have at least 2 characters.')
    .max(30, 'Name should not exceed 30 characters.'),
  email: yup
    .string()
    .required('Please enter your email address.')
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please enter a valid email address.'
    ),
  message: yup
    .string()
    .required('Please enter your message.')
    .min(10, 'Message should have at least 10 characters.')
    .max(500, 'Message should not exceed 500 characters.'),
});

export default validationSchema;
