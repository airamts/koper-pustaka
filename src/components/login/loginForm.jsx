import { Form, Button, Image, InputGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logoImage from "/assets/Logo/Logo.svg";
import googleLogo from "/assets/Logo/Google Logo.svg";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const loginUser = () => {
        window.location.href = '/homeLog';
    }

    const formik = useFormik ({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: loginUser,
        validationSchema: yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required().matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"
            ),
        }),
    })

    const handleForm = (event) => {
        const { target } = event;
        formik.setFieldValue(target.name, target.value);
    }

    return (
        <Form className='loginForm' onSubmit={formik.handleSubmit}>
            <Image src={logoImage} alt="Logo Koper Pustaka" className="logoKorpus" />
            <h1>Login Koper Pustaka</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" className='font-italic' placeholder="Masukkan email kamu" onChange={handleForm} onBlur={formik.handleBlur} name='email' isInvalid={formik.touched.email && formik.errors.email} />
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Kata Sandi</Form.Label>
                <Form.Control type="password" placeholder="Masukkan kata sandi kamu" onChange={handleForm} onBlur={formik.handleBlur} name='password' isInvalid={formik.touched.password && formik.errors.password} />
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='forgetPass'>
                <Link to="/forgotPassword">
                    <p className='linkTo'>Lupa kata sandi?</p>
                </Link>
            </Form.Group>

            <Button variant="dark" type="submit">Masuk</Button>

            <Form.Group className='otherMethod'>
                <Form.Label>---------------------- atau ----------------------</Form.Label>
            </Form.Group>

            <Form.Group className='loginViaGoogle'>
                <Link>
                    <Image src={googleLogo} alt="Google Logo" className="text-black googleLogo" />
                    <p className='linkTo'>Masuk dengan Google</p>
                </Link>
            </Form.Group>

            <Form.Group className='punyaAkun'>
                <p>Belum punya akun? <span><Link to="/signIn" className='linkTo'>Daftar di sini</Link></span></p>
            </Form.Group>
        </Form>
    )
}

export default LoginForm;
