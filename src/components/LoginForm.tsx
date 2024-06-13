import React, { useState } from 'react'
import Textbox from './Textbox';
import ForgotPassword from './ForgotPassword';
import Button from './Button';
import * as Yup from 'yup';
import loginValidationSchema from '../schema/LoginValidations';

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}


export default function LoginForm() {

  const [formData, setFormData] = useState<FormValues>({
    "email": "",
    "password": "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleLogin = () => {
    console.log(formData);
    loginValidationSchema
      .validate(formData, { abortEarly: false })
      .then((validatedValues) => {
        // Form values are valid, proceed with form submission
        console.log('Form is valid', validatedValues);
      })
      .catch((err: Yup.ValidationError) => {
        // Form values are invalid, extract and display errors
        const validationErrors: FormErrors = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      });
  }

  const updateField = (field: string, value: string) => {
    setFormData({
      ...formData, [field]: value
    });
  }

  return (
    <div className='flex flex-col items-center mt-20'>
      <div className="flex items-start w-5/12 pb-2">
        <span className="text-gray-700 heading"> Log In to Groove </span>
      </div>
      <Textbox className="m-2 w-5/12 pb-2" label="Email" value={formData["email"]} name="email" type="email" placeholder="email" errorMsg={errors.email} updateField={updateField} />
      <Textbox className="w-5/12" label="Password" value={formData["password"]} name="password" type="password" placeholder="password" errorMsg={errors.password} updateField={updateField} />
      <ForgotPassword />
      <Button className='m-2 w-5/12' primary={true} btnText='Login' onClick={handleLogin}/>
      <Button className='m-2 w-5/12' primary={false} btnText='Sign Up'/>
    </div>
  )
}
