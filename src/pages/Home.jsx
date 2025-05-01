import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Home = () => {


  const heroSlides = [
    {
      title: 'Welcome to EnlightME Consulting Services',
      subtitle: 'Great journeys begin with the right guidance.',
      image: '/assets/p1.jpg',
    },
    {
      title: 'Education is the passport to the future',
      subtitle: 'Let us help you stamp it.',
      image: '/assets/p6.jpg',
    },
    {
      title: 'We don\'t just consult',
      subtitle: 'we care about your academic journey.',
      image: '/assets/p4.jpg',
    },
    {
      title: 'Helping students turn aspirations into achievements.',
      subtitle: 'Guiding Minds, Shaping Futures.',
      image: '/assets/p7.webp',
    },
  ];

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800"
    >
      <FaArrowLeft />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800"
    >
      <FaArrowRight />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: 'slick-dots !bottom-4',
  };


  const chooses = [
    {
      title: "Tailored to You",
      desc: "No two students are the same — and neither are our services. We take the time to understand your unique background, goals, and preferences, so we can match you with the perfect program and institution in France."
    },
    {
      title: "Insider Expertise You Can Trust",
      desc: "Benefit from the kind of advice you won’t find on Google. With insider knowledge of Campus France procedures and university admission trends, we position you for success with reliable, up-to-date information."
    },
    {
      title: "We’re With You Every Step",
      desc: "From program selection to visa application, accommodation tips to settling into life in France — we’ve got you covered. Think of us as your personal support team, helping you transition smoothly and confidently."
    },
  ]

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative h-[600px]">
        <Slider {...settings} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-[#000000bd] bg-opacity-50" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                 
                    <p className="text-xl md:text-2xl text-blue-700 mb-8 font-bold">
                      {slide.subtitle}
                    </p>
               
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-cyan-600 transition-colors"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* About Founder Section */}
      <section className="py-20">
        <div className="container flex justify-center items-center px-4 flex-wrap gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[500px] w-[100%]"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-600"><span className='text-red-600'>About Our</span> Founder</h2>
            <p className="text-gray-600">
            Mr. Sarafadeen Olalekan Salami isn’t just another education consultant — he’s been where you are and knows exactly what it takes to succeed. As a Former Communication and Promotion Officer at Campus France Nigeria, Sarafadeen gained exclusive insider knowledge of France’s academic system, admission processes, and visa procedures. <br />
            Now, he’s using that experience to open doors for students like you. With years of hands-on advisory experience and strong connections with French institutions, he ensures every student gets credible, practical, and effective guidance to reach their dreams
            </p>
          </motion.div>

          <div>
            <img src="/assets/author.png" alt="" className='md:w-[300px]'/>
          </div>
        </div>
      </section>

       {/* Why Choose us */}
       <section className="py-20"> 
        <h1 className='md:text-4xl text-center my-5 text-3xl md:w-[500px] mx-auto w-[350px] font-bold text-red-600'>Why Choose EnlightME Edu Consults Ltd?</h1>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-8">
            {chooses.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* <div className="flex justify-center mb-6 text-red-600">{service.icon}</div> */}
                <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              arrows={false}
              dotsClass="slick-dots !bottom-4"
            >
              {[
                {
                  quote: 'The consulting services provided were instrumental in our company\'s growth.',
                  author: 'John Doe',
                  position: 'CEO, TechCorp',
                },
                {
                  quote: 'Their strategic insights helped us navigate through challenging times.',
                  author: 'Jane Smith',
                  position: 'Director, Innovate Inc',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg mx-4"
                >
                  <p className="text-gray-600 text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-600"><span className='text-blue-600'>Our</span> Mission</h3>
              <p className="text-gray-600">
              "At EnlightME Edu Consults Ltd, we empower students and professionals with expert guidance on higher education opportunities in France and other European Countries. Through personalized consultations, application support, and seamless travel assistance, we ensure a smooth transition from admission to arrival, making international education more accessible and stress-free."
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600"><span className='text-red-600'>Our</span> Vision</h3>
              <p className="text-gray-600">
              To be the leading education and travel consultancy in Nigeria, recognized for making studying in France, Usa, Uk, and Canada an achievable reality. We aim to bridge the gap between students and world-class French, American, British and Canadian institutions while providing comprehensive travel support, fostering a new generation of global scholars.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 