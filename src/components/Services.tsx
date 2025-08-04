import React from 'react';
import { Palette, Smartphone, Monitor, BookOpen, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "Conception d'interfaces utilisateur intuitives et esthétiques qui convertissent vos visiteurs en clients.",
      features: ["Recherche utilisateur", "Wireframing", "Prototypage", "Tests utilisateurs"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Design Mobile",
      description: "Applications mobiles natives et responsive design pour une expérience optimale sur tous les écrans.",
      features: ["App mobile", "Progressive Web App", "Responsive design", "Mobile-first"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Design System",
      description: "Création de systèmes de design cohérents et évolutifs pour accélérer vos développements.",
      features: ["Composants réutilisables", "Guidelines", "Tokens de design", "Documentation"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Formation & Conseil",
      description: "Accompagnement et formation de vos équipes aux meilleures pratiques du design produit.",
      features: ["Formation Figma", "Audit UX", "Coaching équipe", "Méthodologie"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Services qui font la
            <span className="text-primary-600"> différence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la conception à la réalisation, je vous accompagne à chaque étape 
            pour créer des expériences digitales exceptionnelles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group card p-8 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 group">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment créer 
              une expérience utilisateur qui marquera vos clients.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-primary-600 font-medium px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <span>Démarrer un projet</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;