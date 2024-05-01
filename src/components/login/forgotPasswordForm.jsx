import React, { useState } from 'react';
import { Form, Button, Image, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom"
import googleLogo from "../../assets/Logo/Google Logo.svg"
import mailIn from "../../assets/Illustration/mailIn.svg"
import { useFormik } from 'formik';
import * as yup from 'yup';

const ForgotPasswordForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const forgotPasswordUser = () => {
        setShowModal(true);
    }

    const formik = useFormik ({
        initialValues: {
            email: ""
        },
        onSubmit: forgotPasswordUser,
        validationSchema: yup.object().shape({
            email: yup.string().required().email(),
        }),
    })

    const handleForm = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <div>
            <Form className='loginForm' onSubmit={formik.handleSubmit}>
                <h1>Lupa Kata Sandi</h1>

                <Form.Group>
                    <p>Masukkan email yang sudah terverifikasi untuk mendapatkan <span className='otpCode'>Kode OTP</span> untuk mengubah kata sandimu.</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className='font-italic' placeholder="Masukkan email kamu" onChange={handleForm} onBlur={formik.handleBlur} name='email' isInvalid={formik.touched.email && formik.errors.email} />
                    <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Kirim
                </Button>
            </Form>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Email terverifikasi!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={mailIn} alt="OTP Image" />
                    <p>Silahkan ubah password kamu</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/changePassword">
                        <Button variant="primary" style={{ backgroundColor: "#71CC9B", border: "1px #71CC9B" }}>
                            Ubah Password
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>

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
        </div>
    )
}

export default ForgotPasswordForm
