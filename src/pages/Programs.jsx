
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa';

const Programs = () => {


  const programs = [
    {
      icon: <FaGraduationCap className="w-12 h-12 text-primary-600" />,
      title: "Foundational Program",
      description: 'Begin your academic journey in France with our Foundation Programs, designed to equip international students with the essential academic skills and language proficiency required for undergraduate studies. Available in both English and French, these programs ensure a smooth transition into university life.',
    },
    {
      icon: <FaUsers className="w-12 h-12 text-primary-600" />,
      title: 'Bachelor’s Programs',
      description: 'Discover a wide range of Bachelor’s degree opportunities in top French institutions, taught 100% in English only and 100% in French only. Whether you’re pursuing IT, Computer, business, Engineering,  Education, Arts, or Health Sciences, we guide you to programs tailored to your academic background and career goals.',
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-primary-600" />,
      title: ' Master’s Programs',
      description: 'Advance your career with world-class Master’s programs delivered in both English and French. Our consultancy connects you with internationally accredited universities offering specialized programs in diverse fields, providing global exposure and career-enhancing qualifications',
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-primary-600" />,
      title: 'PhD Programs',
      description: 'Pursue groundbreaking research opportunities in France through PhD programs taught in English or French. EnlightME Edu Consults supports you in identifying supervisors, securing admission, and navigating visa procedures for your academic and research ambitions.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl">At EnlightME Edu Consults Ltd , we connect you to top-tier French institutions offering globally recognized programs taught 100% in English and French.</p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6 text-blue-600">{program.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-red-600">
                  {program.title}
                </h3>
                <p className="mb-4">
                  {program.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span>{program.duration}</span>
                  <span>{program.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
};

export default Programs; 