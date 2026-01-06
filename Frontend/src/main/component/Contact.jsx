import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs
      .send(
        "service_ibtaz8m",
        "template_0as9mll",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "XSgISvDkBsE3gzZ5W"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="" id="contact">
      <section className="py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Us
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-10 text-center">
              <a
                href="https://maps.app.goo.gl/m9beb4muGkPMT7VA6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-14 h-14 mx-auto mb-4 text-blue-600 cursor-pointer hover:text-blue-800" />
              </a>

              <p className="text-lg font-semibold">A.M Coaching Classes</p>
              <p className="text-sm text-gray-600">Street No 1, H.No. 383, Fiza Colony Rd,</p>
              <p className="text-sm text-gray-600">
                Ashiyana Colony, Viswakarma
                Nagar, Nariyalkheda, Bhopal, Madhya Pradesh 462100
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white space-y-4">
              <h3 className="text-2xl font-bold">Visit Our Campus</h3>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Open Daily</p>
                  <p className="text-sm text-blue-100">
                    Mon–Sat: 04:00 AM – 08:00 PM
                  </p>

                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-blue-100">
                    +91 8827123844
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-blue-100">
                    amcoachingclasses34@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
