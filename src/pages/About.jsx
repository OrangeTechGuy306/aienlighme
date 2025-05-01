// import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  // const { t } = useTranslation();

  const values = [
    {
      icon: <FaUsers className="w-12 h-12 text-primary-600" />,
      title: 'About us',
      description: 'At EnlightME Edu Consults Ltd, we are passionate about transforming lives through education. Founded with a vision to bridge the gap between potential and opportunity, we provide expert educational consulting services tailored to students, parents, and institutions.',
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-primary-600" />,
      title: 'Professional Team',
      description: "With a team of seasoned professionals and educators, we specialize in academic advising, international admissions consulting, career guidance, test preparation support, and institutional partnerships. Whether you're a student aiming for global academic opportunities or an institution seeking strategic development, EnlightME is your trusted partner.",
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-primary-600" />,
      title: 'Consulting Services',
      description: 'Our personalized approach ensures that every client receives thoughtful, data-driven, and compassionate guidance to reach their educational goals. At EnlightME, we don’t just consult, we empower, enlighten, and inspire futures.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-950  py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl"></p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              <h1 className='text-blue-600'>Exlusive Summary</h1>
              </h2>
            <div className="space-y-4">
              <h1>EnlightME Edu Consults Ltd is a student advisory and consulting firm specializing in guiding Nigerian students to study in France, Usa, Canada and UK. With firsthand experience working at Campus France Nigeria, EnlightME France Education aims to bridge the gap for students in states not covered by Campus France (Lagos and Abuja). The business offers expert consultation, application assistance, visa guidance, and support for studying in France.</h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {/* {t('about.values.title')} */}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4 text-red-600">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {/* {t('about.team.title')} */}
          </h2>
          {/* <div className="grid md:grid-cols-3 gap-8">
            {t('about.team.members', { returnObjects: true }).map(
              (member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 mb-2">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </motion.div>
              )
            )}
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About; 