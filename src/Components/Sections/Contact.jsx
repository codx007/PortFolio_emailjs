import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "@emailjs/browser";


export const Contact = () => {
    const [formData, SetFormData] = useState({
        name: "",
        email: "",
        message: "",
    })



    const Service_ID = "service_ugr4669"
    const template_ID = "template_lt6p0o8"
    const publicKey = "RWRY4w_ibAlulIGql"


    const handleSumbit = (e) => {
        e.preventDefault();

        emailjs.sendForm(Service_ID, template_ID, e.target, publicKey)
            .then((result) => {
                alert("Message Sent");
                SetFormData({ name: "", email: "", message:"", })
            })
            .catch(() => alert("Oops something went wrong. plz try again"));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

                <div className="px-4 w-150 flex flex-col">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Get In Touch</h2>
                    <form className="space-y-6" action="" onSubmit={handleSumbit}>
                        <div className="relative">
                            <input type="text" name="name" id="name" required value={formData.name} onChange={(e) => SetFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name.." />

                            <input type="email" name="email" id="email" required value={formData.email} onChange={(e) => SetFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com" />

                            <div className="relative"> <textarea type="message" name="message" id="message" required value={formData.message} rows={5} onChange={(e) => SetFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message.."></textarea></div>

                            <button type="sumbit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,13,246,0.4)]">
                                Send Message
                            </button>

                            <div>
                                <a className=" w-full bg-blue-500 text-white pb-6 mt-50 mb-7 relative rounded font-medium transition  overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,13,246,0.4)]" href="https://youtu.be/LGdPMf-SgBA?t=5680">ReSume Video</a>
                            </div>

                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );

};