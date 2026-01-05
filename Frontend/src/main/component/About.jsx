import React from "react";
import {
  // import About from './About';
  Award,
  Users,
  Target,
  Heart,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of education and student development",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Dedication",
      description:
        "Committed to nurturing and developing the potential of every student",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description:
        "Building a supportive learning community where everyone thrives together",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results",
      description:
        "Focused on delivering measurable results and academic success",
    },
  ];

  const achievements = [
    "Over 12 years of educational excellence",
    "500+ successful students",
    "95% student satisfaction rate",
    "Experienced and qualified faculty",
    "Modern teaching methodologies",
    "Regular progress assessments",
  ];

  return (
    <div className="min-h-screen" id="about">
      {/* HERO */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              A.M Coaching
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building futures through quality education and personalized learning
            experiences
          </p>
        </div>
      </section> */}

      {/* MISSION */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              About Us
            </span>

            <h2 className="text-4xl font-bold text-gray-900">
              Empowering Students Through Quality Education
            </h2>

            <p className=" text-gray-600 leading-relaxed">
              At A.M Coaching Classes, we are dedicated to providing comprehensive
              education across all academic subjects. Our mission is to create a
              nurturing environment where students can develop their full
              potential and achieve academic excellence.
            </p>

            <p className=" text-gray-600 leading-relaxed">
              We believe in personalized attention, innovative teaching methods,
              and fostering a love for learning that extends beyond the
              classroom.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 space-y-6">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Comprehensive Learning",
                desc: "All subjects covered with depth",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Faculty",
                desc: "Qualified and experienced teachers",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Result Oriented",
                desc: "Proven track record of success",
                color: "from-teal-500 to-teal-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* VALUES */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-12 text-white space-y-6">
            <h3 className="text-3xl font-bold">Our Achievements</h3>
            {achievements.map((a, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 mt-1" />
                <p className="text-lg text-blue-50">{a}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Excellence in Education
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className=" text-gray-600 leading-relaxed text-justify">
              We believe that great teachers inspire great students. Our mission includes building
              a team of dedicated, experienced, and passionate educators who are committed to
              the success of their students. Our faculty members not only teach subjects but also
              mentor students, guide them academically and personally, and motivate them to
              aim higher.
            </p>
            <p className="text-justify text-gray-600 leading-relaxed">
              Continuous training and professional development of teachers is an important part
              of our mission. We ensure that our faculty stays updated with the latest curriculum
              changes, teaching methods, and examination patterns so that students receive
              relevant and effective instruction.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-5xl mx-auto text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
          <p className=" text-blue-100 leading-relaxed text-justify">
            Our vision is to become a trusted and leading coaching institute that empowers
            students with knowledge, confidence, and strong values, enabling them to achieve
            academic excellence and personal growth. We aim to create a learning environment
            where education goes beyond textbooks and examinations, helping students develop
            clarity of thought, discipline, and a lifelong passion for learning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
