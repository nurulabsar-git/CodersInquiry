import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Form from './formComponents/Form';
import Input from './formComponents/Input';
import MainContainer from './formComponents/MainContainer';
import PrimaryButton from './formComponents/PrimaryButton';
import './Login.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Email should have correct format').required('Email is a require field'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
});
const Login = () => {
    const [data, setValues] = useState({});
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: data.email,
            password: data.password,
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        setValues(data);
        history.push('/');
        console.log(data);
    };
    return (
        <MainContainer className='login_container'>
            <Typography>Login Now</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('email')} type='text' label='Email' name='email' error={!!errors.email} helperText={errors?.email?.message} required />
                <Input {...register('password')} type='password' label='Password' name='password' error={!!errors.password} helperText={errors?.password?.message} required />
                <PrimaryButton>Login</PrimaryButton>
            </Form>
            <Link to='/register'>
                Have no account?<span style={{ color: 'red' }}>register now</span>
            </Link>
        </MainContainer>
    );
};

export default Login;
