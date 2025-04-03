import React from 'react';
import { 
  Microscope, 
  Award, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  Star
} from 'lucide-react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80"
              alt="Laboratory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/70"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Advanced Medical Testing Services</h1>
              <p className="text-xl mb-8">Providing accurate and reliable diagnostic services with state-of-the-art technology and experienced professionals.</p>
              <a href="#book" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
                Book a Test
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">25+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">50k+</div>
            <div className="text-gray-600">Tests Performed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Types of Tests</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
              <p className="text-gray-600">Our team consists of highly qualified and experienced medical professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Microscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">We use state-of-the-art equipment for accurate and reliable results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
              <p className="text-gray-600">Get your test results quickly through our secure online portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Blood Tests',
                description: 'Complete blood count, diabetes screening, thyroid function, and more.',
                price: 'From $50'
              },
              {
                title: 'COVID-19 Testing',
                description: 'RT-PCR and antibody tests with quick results.',
                price: 'From $75'
              },
              {
                title: 'Allergy Testing',
                description: 'Comprehensive panels to identify allergic reactions.',
                price: 'From $120'
              },
              {
                title: 'Genetic Testing',
                description: 'DNA analysis for health and ancestry information.',
                price: 'From $199'
              },
              {
                title: 'Hormone Testing',
                description: 'Comprehensive hormone level analysis.',
                price: 'From $150'
              },
              {
                title: 'Cardiovascular Tests',
                description: 'ECG, stress tests, and cholesterol screening.',
                price: 'From $100'
              }
            ].map((service, index) => (
              <div key={index} className="border p-6 rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-blue-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                text: 'Excellent service and very professional staff. Got my results quickly and the online portal is very convenient.'
              },
              {
                name: 'Michael Chen',
                text: 'The booking process was smooth and the staff was very helpful in explaining the tests. Highly recommended!'
              },
              {
                name: 'Emily Brown',
                text: 'Very clean facility and friendly staff. The whole process was efficient and well-organized.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book an Appointment</h2>
          <BookingForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <p>Example Address, City, State, ZIP</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                    <p>0123456789</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-3" />
                    <p>example@email.com</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645004417867!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ayesha Clinical Lab</h3>
              <p className="text-blue-200">Providing quality diagnostic services since 1998.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">Blood Tests</li>
                <li className="text-blue-200">COVID-19 Testing</li>
                <li className="text-blue-200">Allergy Testing</li>
                <li className="text-blue-200">Genetic Testing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="flex space-x-4">
                <Award className="w-12 h-12 text-blue-200" />
                <Users className="w-12 h-12 text-blue-200" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; 2024 Ayesha Clinical Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;