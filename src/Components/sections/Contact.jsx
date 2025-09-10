import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(() => {
            alert("Failed to send the message, please try again.");
        });
    };

    return(
        <section id = "contact" className = "min-h-screen flex items-center justify-center">
            <RevealOnScroll>
                <div className="w-full sm:w-full md:w-[600px] px-4 md:px-10 mx-auto">
                    <h2 className="font-bold text-3xl mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" value={formData.name} required className="w-full background-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Name..."
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" required value={formData.email} className="w-full background-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="example@gmail.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" required value={formData.message} rows={5} className="w-full background-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message..." onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded transition relative overflow:hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};