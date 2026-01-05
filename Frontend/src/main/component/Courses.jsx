import React from "react";
import {
  BookOpen,
  GraduationCap,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Nursery to Class 10",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      description:
        "Strong foundation coaching for Nursery to Class 10 covering all subjects with concept clarity and regular assessments.",
      points: [
        "All Subjects Covered",
        "Concept-Based Teaching",
        "Regular Tests & Doubt Solving",
        "Personal Attention",
      ],
    },
    {
      title: "Class 11 & 12 – Commerce",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      description:
        "Specialized coaching for Commerce stream with focus on board exams and practical understanding.",
      points: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Board Exam Preparation",
      ],
    },
    {
      title: "Remedial Classes",
      icon: <RefreshCcw className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      description:
        "Special remedial classes for students needing extra support in specific subjects.",
      points: [
        "Accountancy (Basics to Advanced)",
        "Economics (Concept Clarity)",
        "Slow & Structured Teaching",
        "One-to-One Guidance",
      ],
    },
  ];

  return (
    <div id="courses">

      {/* ================= HEADER ================= */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
            Our Courses
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Courses We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Offer
            </span>
          </h1>

          <p className="text-lg text-gray-600">
            Complete academic support for school and commerce students with
            personalized guidance.
          </p>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Top Gradient Strip (FIXED) */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />

              <div className="p-8 space-y-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-white`}
                >
                  {course.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="text-gray-600">{course.description}</p>

                <ul className="space-y-2">
                  {course.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPECIAL SUBJECTS ================= */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 space-y-4">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
              Special Subjects
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Skill Development Programs
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unique programs designed to boost thinking skills, speed,
              accuracy, and creativity in students.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mental Math",
                desc: "Improve calculation speed, accuracy, and confidence using smart mental techniques.",
              },
              {
                title: "Abacus",
                desc: "Strengthen brain development, concentration, and visualization skills through abacus training.",
              },
              {
                title: "Problem Solving Skills",
                desc: "Enhance logical thinking and analytical ability to solve problems effectively.",
              },
              {
                title: "Imagination Math",
                desc: "Develop creative thinking and visualization techniques to make math fun and easy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 px-4 bg-gradient-to-r from-[#0f4c8c] to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your Learning Journey Today
          </h2>
          <p className="text-blue-100">
            Enroll now and give your child the right academic guidance.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
