"use client";
import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Contact() {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.description}>
        Have a question or a project in mind? Don&apos;t hesitate to reach out!
      </p>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoItem}>
            <strong>Email :</strong>
            <a href="mailto:votre@email.com">your@email.com</a>
          </div>
          <div className={styles.infoItem}>
            <strong>LinkedIn :</strong>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              My LinkedIn Profile
            </a>
          </div>
          <div className={styles.infoItem}>
            <strong>GitHub :</strong>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              My GitHub Profile
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
            <div className={styles.successMessage}>
              {submitSuccess && 
            <p className={styles.successMessage}>
                Your message has been sent successfully!
            </p>}
            </div>
        </form>
      </div>
    </div>
  )
}
