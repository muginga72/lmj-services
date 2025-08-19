const Contact = () => (
  <section>
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;