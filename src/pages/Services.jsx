
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaUsers, FaHandshake, FaGlobe, FaBalanceScale } from 'react-icons/fa';
import { SiConsul } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { FaFileAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaPeoplePulling } from "react-icons/fa6";
import { BsFillPassportFill } from "react-icons/bs";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { FaHospitalUser } from "react-icons/fa6";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa6";




const Services = () => {


  const preApplication = [
    {
      icon: <SiConsul className="w-12 h-12 text-primary-600" />,
      title: 'Personalized Consultation',
      description: 'Career counselling, university selection, and course matching.',
    },
    {
      icon: <ImProfile className="w-12 h-12 text-primary-600" />,
      title: 'Profile Building',
      description: 'CV enhancement, SOP guidance, and recommendation letter assistance.',
    },
    {
      icon: <FaFileAlt className="w-12 h-12 text-primary-600" />,
      title: 'Scholarship Advisory',
      description: 'Assistance with finding and applying for scholarships.',
    },
    
  ];


  const appAssistance = [
    {
      icon: <FaNewspaper className="w-12 h-12 text-primary-600" />,
      title: 'Document Preparation',
      description: 'Application form completion, transcript verification, and submission.',
    },
    {
      icon: <FaPeopleCarryBox className="w-12 h-12 text-primary-600" />,
      title: 'Application Follow-up',
      description: 'Liaising with universities for application updates.',
    },
    
  ];

  const visa = [
    {
      icon: <FaPeoplePulling className="w-12 h-12 text-primary-600" />,
      title: 'Visa Application Assistance',
      description: 'Guidance on student visa requirements and documentation.',
    },
    {
      icon: <BsFillPassportFill className="w-12 h-12 text-primary-600" />,
      title: 'Visa Interview Preparation',
      description: 'Mock interviews and common question preparation.',
    },
    {
      icon: <GiAirplaneDeparture className="w-12 h-12 text-primary-600" />,
      title: 'Pre-Departure Briefing',
      description: 'Cultural orientation, financial planning, and travel checklists.',
    },
    
  ];


  const arrival = [
    {
      icon: <HiHomeModern className="w-12 h-12 text-primary-600" />,
      title: 'Accommodation Assistance',
      description: 'Guidance on finding housing in France.',
    },
    {
      icon: <FaHospitalUser className="w-12 h-12 text-primary-600" />,
      title: 'Health Insurance & Financial Planning',
      description: 'Advice on securing mandatory student health insurance.',
    },
    {
      icon: <CgSmileMouthOpen className="w-12 h-12 text-primary-600" />,
      title: 'French Language Support',
      description: 'Resources for learning basic French.',
    },
    {
      icon: <FaNetworkWired className="w-12 h-12 text-primary-600" />,
      title: 'Networking & Alumni Support',
      description: 'Connecting students with past applicants in France.',
    }
    
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
              Core Services
            </h1>
            <p className="text-xl">Our core services include expert consultation, application assistance, visa guidance, and support are essential and form the foundation of a strong study-abroad consultancy.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h1 className='text-3xl text-center my-5'>Pre-Application Services.</h1>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-8">
            {preApplication.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6 text-red-600">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <h1 className='text-3xl text-center my-5'>Application Assistance.</h1>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appAssistance.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6 text-red-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <h1 className='text-3xl text-center my-5'>Visa Guidance & Travel Support.</h1>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visa.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6 text-red-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20">
        <h1 className='text-3xl text-center my-5'>Post-Arrival & Additional Support.</h1>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arrival.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6 text-red-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {/* {t('services.process.title')} */}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              {/* {t('services.process.steps', { returnObjects: true }).map(
                (step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start mb-8"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              )} */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('services.cta.subtitle')}
            </p>
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t('services.cta.button')}
            </a>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Services; 