import React, { useState } from 'react';
import { toast } from 'react-hot-toast'

const useForm = (initialData, onValidate) => {

    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        const err = onValidate(form)
        setErrors(err)

        if (Object.keys(err).length === 0) {
            setLoading(true)
            toast.loading('Aguarde un momento por favor...' , {position: "bottom-center", duration: 2000, style: {background: "#101010", padding: "20px", color: "#fff"}})
            fetch(import.meta.env.VITE_URL_EMAIL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.success === "true" && setForm(initialData);
                setLoading(false);
                toast.success('Correo enviado', {position: "bottom-center", style: {background: "#101010", padding: "20px", color: "#fff"}});
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                toast.error('Se produjo un error, intenta de nuevo', {position: "bottom-center", style: {background: "#101010", padding: "20px", color: "#fff"}});
                
            })
        }

     }

    return { form, errors, loading, handleChange, handleSubmit }

};

export default useForm;
