import '../css/Contact.css'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    return (
        <div className="contactText">
            <h1>Contact Us</h1>
            <p>For any questions or concerns, please feel free to contact us.</p>
            <form
            onSubmit={(e) => {
                e.preventDefault();
                toast.success('Submitted successfully!');
              }}>
                <label htmlFor="name">Full Name</label>
                <input required name="name" placeholder="Enter your name..." type="text" />
                <label htmlFor="email">Email</label>
                <input required name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea
                    rows="6"
                    placeholder="Enter message..."
                    name="message"
                    required
                ></textarea>
            <button type="submit"> Send Message</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Contact;