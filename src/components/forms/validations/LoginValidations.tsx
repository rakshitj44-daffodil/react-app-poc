import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(6, 'Email must have at least 6 letters.')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 letters.')
    .required('Password is required'),
})

export default loginValidationSchema;