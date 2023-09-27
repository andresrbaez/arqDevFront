import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useForm from "../hooks/useForm"

const Contact = () => {

    const initialData = {
        name: '',
        email: '',
        subject: '',
        msg: ''
    }

    //? toast.success('Correo enviado', {position: "center", style: {background: "#101010", color: #fff}})

    const onValidate = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,1000}$/;

        if (!form.name.trim()) {
            errors.name = 'El campo "Nombre" no debe ser vacío.'
        } else if (!regexName.test(form.name)) {
            errors.name = 'El campo "Nombre" solo acepta letras y espacios.'
        }

        if (!form.email.trim()) {
            errors.email = 'El campo "Correo" no debe ser vacío.'
        } else if (!regexEmail.test(form.email)) {
            errors.email = 'El campo "Correo" contiene un formato inválido.'
        }

        if (!form.subject.trim()) {
            errors.subject = 'El campo "Asunto" no debe ser vacío.'
        } else if (!regexComments.test(form.subject)) {
            errors.subject = 'El campo "Asunto" solo acepta letras y espacios.'
        }

        if (!form.msg.trim()) {
            errors.msg = 'El campo "Mensaje" no debe ser vacío.'
        } else if (!regexComments.test(form.msg)) {
            errors.msg = 'El campo "Mensaje" acepta solo 1000 caracteres.'
        }

        return errors
    }
    const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)



    return (
        <>
            <NavBar />
            <div className='header-contact'>
                <div className='mb-2'>
                    <h2 className='font-semibold text-[42px]'>
                        Contáctame
                    </h2>
                </div>

                <div className='grid-contact w-full px-28 mt-6 justify-items-center items-center'>
                    <form className='form-square' onSubmit={handleSubmit} >
                    <p className=''>
                        ¡Envíame un mensaje! Tan pronto sea posible me contactaré contigo.
                    </p>

                        <label className={`text-left form-group mt-4`}>
                            <input
                                className='form-input h-[50px] form-input_request_quotation'
                                placeholder=' '
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                            />
                            <span className='form-input_label'>Nombre</span>
                        </label>
                        {errors.name &&
                            <div className='border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center'>{errors.name}</div>
                        }

                        <label className='text-left form-group mt-4'>
                            <input
                                className='form-input h-[50px] form-input_request_quotation'
                                placeholder=' '
                                type="text"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                            />
                            <span className='form-input_label'>Correo</span>

                        </label>
                        {errors.email &&
                            <div className='border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center'>{errors.email}</div>
                        }

                        <label className='text-left form-group mt-4'>
                            <input
                                className='form-input h-[50px] form-input_request_quotation'
                                placeholder=' '
                                type="text"
                                name='subject'
                                value={form.subject}
                                onChange={handleChange}
                            />
                            <span className='form-input_label'>Asunto</span>
                        </label>
                        {errors.subject &&
                            <div className='border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center'>{errors.subject}</div>
                        }

                        <label className='text-left form-group mt-4 !min-h-[100px]'>
                            <textarea
                                className='form-input !h-[100px] !min-h-[100px] p-2 form-input_request_quotation'
                                placeholder=' '
                                name="msg"
                                cols="30"
                                rows="10"
                                value={form.msg}
                                onChange={handleChange}
                            ></textarea>
                            <span className='form-input_label'>Mensaje</span>

                        </label>
                        {errors.msg &&
                            <div className='border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center'>{errors.msg}</div>
                        }

                        <div className='flex justify-center items-center'>
                            <button className='btn-secondary_submit mt-4 !w-[165px] !text-[16px]' disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
                        </div>
                    </form>

                    <div className='contact-square'>
                        <a href="tel:+573017909110" target="_blank" className="resp-btn aButton contactButton">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className='bx bxs-phone iconCon'></i>
                            +57 (301) 790 9110
                        </a>

                        <a href="mailto:juanfernando2197@hotmail.com" target="_blank" className="resp-btn aButton contactButton">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className='bx bxs-envelope iconCon'></i>
                            juanfernando2197@hotmail.com
                        </a>

                        <a href="https://wa.me/573017909110"  target="_blank" className="resp-btn aButton contactButton">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className='bx bxl-whatsapp iconCon'></i>
                            WA: 301 790 9110
                        </a>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Contact;