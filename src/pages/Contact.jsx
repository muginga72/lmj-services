const Contact = () => (
  <div className="container py-5">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Name" className="form-control mb-3" />
      <input type="email" placeholder="Email" className="form-control mb-3" />
      <textarea placeholder="Message" className="form-control mb-3" />
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </div>
);

export default Contact;