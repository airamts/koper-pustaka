import { Form, Button, Image, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logoImage from "/assets/Logo/Logo.svg";
import googleLogo from "/assets/Logo/Google Logo.svg";
import bacaBuku from "/assets/Illustration/bacaBuku.svg"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
import { auth } from '../../firebase-config';

import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const loginUser = async (values) => {
        try{
            await signInWithEmailAndPassword(auth, values.email, values.password);
            console.log("login successfully")
            window.location.href = '/homeLog';
        } catch (error) {
            console.error(error.message);
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log(user);
          console.log("login successfully")
          window.location.href = '/homeLog';
        } catch (error) {
          console.error(error.message);
        }
      };

    const formik = useFormik ({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            setShowModal(true);
            console.log("Form submitted with values:", values);
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email diperlukan").email("Harus berupa email yang valid"),
            password: yup.string().required("Password diperlukan")
                .matches(/[a-z]/, 'Password harus mengandung huruf kecil')
                .matches(/[A-Z]/, 'Password harus mengandung huruf besar')
                .matches(/[0-9]/, 'Password harus mengandung angka')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password harus mengandung karakter spesial')
                .min(8, 'Panjang password minimal 8 karakter'
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

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Kamu berhasil Login!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={bacaBuku} alt="OTP Image" />
                    <p>Selamat mengeksplor buku dan ilmu baru 😆</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/homeLog">
                        <Button variant="primary" style={{ backgroundColor: "#71CC9B", border: "1px #71CC9B" }}>
                            Lanjutkan
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>

            <Form.Group className='otherMethod'>
                <Form.Label>---------------------- atau ----------------------</Form.Label>
            </Form.Group>

            <Form.Group className='loginViaGoogle'>
                <Link onClick={signInWithGoogle}>
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
