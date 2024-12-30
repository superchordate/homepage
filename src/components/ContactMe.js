import React from 'react';

function ContactMe() {
  return (
    <section style={styles.container}>
      <h2 style={styles.header}>Contact Me</h2>
      <p style={styles.text}>
        Email me at{" "}
        <a href="mailto:bryce@brycechamberlainllc.com" style={styles.link}>bryce@brycechamberlainllc.com</a> or use the form below to schedule a call.
        <br/>I hope to hear from you soon!
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
  },
  link: {
    color: "#52B9C8",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default ContactMe;
