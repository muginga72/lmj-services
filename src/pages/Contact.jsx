import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="container py-5">
      <h2>Contact Us</h2>
      {submitted && (
        <div className="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-3"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="form-control mb-3"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Send</button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;