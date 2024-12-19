import React, { useState } from 'react';
import './contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const email = "example@example.com";
  const phoneNumber = "+1234567890";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ message: 'Please fill out all fields.', color: 'red' });
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setFormStatus({ message: 'Please enter a valid email address.', color: 'red' });

    }
    console.log(formData);
    setFormStatus({ message: 'Your message has been sent successfully!', color: 'green' });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex contact-list-container gap-20 justify-between ml-lg mt-1 mb-1 mr-lg w-75">
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to us through any of the following methods:</p>

        
            <div className="contact-form mt-sm accent pt-lg pr-1 w-100">
                <h3>Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form mt-sm">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        />
                    </div>

                    <div className="form mt-sm">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                        />
                    </div>

                    <div className="form mt-sm">
                        <label htmlFor="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="You message"
                        />
                    </div>

                    <button type="submit" className="btn-secondary-tgl-sm-active mt-1">Send Message</button>
                </form>

                {formStatus && (
            <p className="message-sent" style={{ color: formStatus.color }}>
              {formStatus.message}
            </p>
          )}

            </div>
        </div>

      <div className="contact-info flex direction-col justify-center mt-sm">
        <div>
          <h3>Email</h3>
          <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>

        <div className="mt-sm">
          <h3>Phone</h3>
          <p>{phoneNumber}</p>
        </div>

        <div className="mt-sm">
          <h3>WhatsApp</h3>
          <p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat with us on WhatsApp"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default ContactPage;
