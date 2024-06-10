import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import { Element } from 'react-scroll';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eh03p7w', 'template_8orohiy', e.target, '_bX2NY9wLrBnbt_K9')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again later.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Element name='contact'>
            <div className='contact'>
                <div className='header-p'><h1>Contact Me</h1></div>
                <div className='form-p'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                        <div className='button-container'>
                            <button className='contact-link' type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
