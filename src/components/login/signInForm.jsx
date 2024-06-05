import { useNavigate } from 'react-router-dom';
import { Form, Button, Image, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom"
import googleLogo from "/assets/Logo/Google Logo.svg"
import { useFormik } from 'formik';
import * as yup from 'yup';

import { auth } from '../../firebase-config';
import { db } from '../../firebase-config';
import { getDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

const SignInForm = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleCloseModal = () => setShowModal(false);

    const registerUser = async (values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = auth.currentUser;
            if (user){
                await setDoc(doc(db, "UserRegister",user.uid), {
                    email: values.email,
                    username: values.username,
                    password: values.password,
                });
                setShowModal(true);
            }
            console.log("Registered Successfully")
        } catch (error) {
            console.error(error.message);
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          const userRef = doc(db, "UserRegister", user.uid);
          const userDoc = await getDoc(userRef);
          if (!userDoc.exists()) {
            await setDoc(userRef, {
              email: user.email,
              username: user.displayName,
              password: "",
            });
          }
          setShowModal(true);
        } catch (error) {
          console.error(error.message);
        }
      };

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: registerUser,
        validationSchema: yup.object().shape({
            username: yup.string().required("Username diperlukan").min(3, 'Paling tidak mengandung 3 karakter').max(10, 'Maksimal mengandung 10 karakter'),
            email: yup.string().required("Email diperlukan").email("Harus berupa email yang valid"),
            password: yup.string().required("Password diperlukan")
                .matches(/[a-z]/, 'Password harus mengandung huruf kecil')
                .matches(/[A-Z]/, 'Password harus mengandung huruf besar')
                .matches(/[0-9]/, 'Password harus mengandung angka')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password harus mengandung karakter spesial')
                .min(8, 'Panjang password minimal 8 karakter'
            ),
        }),
    });

    const handleForm = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <Form className='loginForm' onSubmit={formik.handleSubmit}>
            <h1>Daftar Koper Pustaka</h1>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" className='font-italic' placeholder="Masukkan nama kamu" onChange={handleForm} onBlur={formik.handleBlur} name='username' isInvalid={formik.touched.username && formik.errors.username} />
                <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
            </Form.Group>

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

            <Button variant="dark" type="submit">
                Daftar
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Akun telah terdaftar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Silahkan masuk ke login page agar dapat mengakses Koper Pustaka 😆
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/login">
                        <Button variant="primary" style={{ backgroundColor: "#71CC9B", border: "1px #71CC9B" }}>
                            Masuk
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
                <p>Sudah punya akun? <span><Link to="/login" className='linkTo'>Masuk di sini</Link></span></p>
            </Form.Group>
        </Form>
    );
};

export default SignInForm;
