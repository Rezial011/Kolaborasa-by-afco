import React, { useState } from "react";

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const text = `*KONTAK DARI WEBSITE KOLABORASA*

*Nama:* ${name}
*Email:* ${email}
*Subjek:* ${subject}

*Pesan:*
${message}

---
_Pesan dikirim melalui form kontak website_`;

    setFormattedMessage(text);
    setShowModal(true);
  };

  const copyAndOpenWhatsApp = () => {
    const whatsappNumber = "6281329999130";
    
    navigator.clipboard.writeText(formattedMessage).then(() => {
      alert('Pesan berhasil disalin! Anda akan dialihkan ke WhatsApp. Silakan paste pesan di chat.');
      const url = `https://wa.me/${whatsappNumber}`;
      window.open(url, "_blank");
      setShowModal(false);
    }).catch(() => {
      // Fallback untuk browser yang tidak support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = formattedMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      alert('Pesan berhasil disalin! Anda akan dialihkan ke WhatsApp. Silakan paste pesan di chat.');
      const url = `https://wa.me/${whatsappNumber}`;
      window.open(url, "_blank");
      setShowModal(false);
    });
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info animate">
            <h3>Contact Information</h3>

            {/* Location */}
            <div className="contact-detail">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="#ce3434" d="M19.367 18.102L18 14h-1.5l.833 4H2.667l.833-4H2L.632 18.102C.285 19.146.9 20 2 20h16c1.1 0 1.715-.854 1.367-1.898M15 5A5 5 0 1 0 5 5c0 4.775 5 10 5 10s5-5.225 5-10m-7.7.06A2.7 2.7 0 0 1 10 2.361a2.699 2.699 0 1 1 0 5.399a2.7 2.7 0 0 1-2.7-2.7"/></svg>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>
                  <a
                    href="https://maps.app.goo.gl/PPGjLDwyDsUKgXw79"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Kota Wisata Cibubur, Jl. Pesona Amerika No.A2 No. 20, Ciangsana, Kec. Gn.
                    Putri, Kabupaten Bogor, Jawa Barat 16967
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-detail">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ce3434" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>
                  <a
                    href="https://wa.me/6281329999130"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +62 8132-9999-130 (WhatsApp)
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-detail">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ce3434" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@kolaborasa.id</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-detail">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ce3434" d="M18 4H2V2h16zm-.5 9H16v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-3.53 0-6.43-2.61-6.92-6H2v-6H1v-2l1-5h16l1 5v.29c2.89.87 5 3.54 5 6.71M4 16h6v-4H4zm18 1c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"/></svg>
              </div>
              <div className="contact-text">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9AM - 5PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form animate animate-delay-1">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{
              marginTop: 0,
              marginBottom: '20px',
              color: '#333',
              textAlign: 'center'
            }}>Pesan Anda Siap Dikirim!</h3>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
              whiteSpace: 'pre-line',
              fontSize: '14px',
              fontFamily: 'monospace',
              border: '1px solid #e9ecef',
              maxHeight: '300px',
              overflow: 'auto'
            }}>
              {formattedMessage}
            </div>
            
            <p style={{
              textAlign: 'center',
              marginBottom: '25px',
              color: '#666',
              fontSize: '14px'
            }}>
              Klik tombol di bawah untuk menyalin pesan dan membuka WhatsApp. 
              Setelah WhatsApp terbuka, paste pesan di chat.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={copyAndOpenWhatsApp}
                style={{
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#128C7E'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
              >
                📋 Copy & Buka WhatsApp
              </button>
              
              <button 
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;