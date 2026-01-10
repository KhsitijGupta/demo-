// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleWhatsAppSend = () => {
//     if (!formData.name || !formData.phone || !formData.message) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const whatsappNumber = "919993534374";

//     const text = `
// New Contact Enquiry 📩

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Subject: ${formData.subject}

// Message:
// ${formData.message}
//   `;

//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       text
//     )}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="" id="contact">
//       <section className="py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
//         <div className="max-w-7xl mx-auto text-center space-y-2">
//           <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
//             Get In Touch
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Contact{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
//               Us
//             </span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Have questions? We'd love to hear from you.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//               Send us a Message
//             </h2>

//             <form className="space-y-5">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name *"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               />

//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email *"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone *"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message *"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
//               />

//               <button
//                 type="button"
//                 onClick={handleWhatsAppSend}
//                 className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
//               >
//                 Send on WhatsApp <Send className="w-5 h-5" />
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-10 text-center">
//               <a
//                 href="https://maps.app.goo.gl/m9beb4muGkPMT7VA6?g_st=aw"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MapPin className="w-14 h-14 mx-auto mb-4 text-blue-600 cursor-pointer hover:text-blue-800" />
//               </a>

//               <p className="text-lg font-semibold">A.M Coaching Classes</p>
//               <p className="text-sm text-gray-600">
//                 Street No 1, H.No. 383, Fiza Colony Rd,
//               </p>
//               <p className="text-sm text-gray-600">
//                 Ashiyana Colony, Viswakarma Nagar, Nariyalkheda, Bhopal, Madhya
//                 Pradesh 462100
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white space-y-4">
//               <h3 className="text-2xl font-bold">Visit Our Campus</h3>

//               <div className="flex gap-3">
//                 <Clock className="w-5 h-5 mt-1" />
//                 <div>
//                   <p className="font-medium">Open Daily</p>
//                   <p className="text-sm text-blue-100">
//                     Mon–Sat: 04:00 AM – 08:00 PM
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <Phone className="w-5 h-5 mt-1" />
//                 <div>
//                   <p className="font-medium">Call Us</p>
//                   <p className="text-sm text-blue-100">+91 8827123844</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <Mail className="w-5 h-5 mt-1" />
//                 <div>
//                   <p className="font-medium">Email</p>
//                   <p className="text-sm text-blue-100">
//                     amcoachingclasses34@gmail.com
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

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

  const handleWhatsAppSend = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "919993534374";

    const text = `
New Contact Enquiry 📩

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      {/* Header */}
      <section className="py-16 text-center px-4">
        <span className="inline-block mb-4 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Let’s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            Connect
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or need guidance? We’re just a message away.
        </p>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="backdrop-blur-xl bg-white/80 border border-white/50 rounded-3xl shadow-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <div className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 pl-12 pr-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 pl-12 pr-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 pl-12 pr-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border resize-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Button */}
              <button
                onClick={handleWhatsAppSend}
                className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-[1.02] transition text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                Send via WhatsApp <Send size={18} />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="rounded-3xl bg-white shadow-xl p-8 text-center">
              <a
                href="https://maps.app.goo.gl/m9beb4muGkPMT7VA6"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="w-14 h-14 mx-auto mb-4 text-blue-600 hover:scale-110 transition" />
              </a>
              <p className="text-lg font-bold">A.M Coaching Classes</p>
              <p className="text-sm text-gray-600 mt-2">
                Street No 1, H.No. 383, Fiza Colony Rd, Ashiyana Colony,
                Viswakarma Nagar, Nariyalkheda, Bhopal, Madhya Pradesh 462100
              </p>
            </div>

            {/* Details */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-green-600 p-8 text-white space-y-5 shadow-2xl">
              <h3 className="text-2xl font-bold">Visit Our Campus</h3>

              <div className="flex gap-4">
                <Clock />
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-sm text-blue-100">
                    Mon–Sat: 4:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-blue-100">+91 8827123844</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail />
                <div>
                  <p className="font-semibold">Email</p>
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
