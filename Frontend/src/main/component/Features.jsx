import feature1 from "../../../assests/imgSli1.png"
import feature2 from "../../../assests/imgSli2.png"
import feature3 from "../../../assests/imgSli3.png"
import feature4 from "../../../assests/imgSli4.png"

const features = [
  {
    title: "Expert Faculty",
    description: "Learn from highly experienced and dedicated teachers.",
    image: feature1,
  },
  {
    title: "Structured Study Material",
    description: "Well-organized notes and practice sets for clarity.",
    image: feature2,
  },
  {
    title: "Regular Tests & Analysis",
    description: "Frequent assessments with detailed performance review.",
    image: feature3,
  },
  {
    title: "Personal Mentorship",
    description: "One-on-one guidance to track and improve progress.",
    image: feature4,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Course <span className="text-green-600">Features</span>
          </h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            What makes our courses effective and student-friendly
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition" />

              {/* Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className=" text-gray-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
