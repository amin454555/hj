import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Approche centrée utilisateur",
      description: "Chaque décision de design est basée sur une compréhension profonde des besoins utilisateurs."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation créative",
      description: "Je combine créativité et méthodologie pour créer des solutions uniques et impactantes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration étroite",
      description: "Un partenariat transparent avec vos équipes pour des résultats alignés sur vos objectifs."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence technique",
      description: "Maîtrise des derniers outils et tendances du design pour des livrables de qualité."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Passionné par le design qui
              <span className="text-primary-600"> transforme</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Avec plus de 5 années d'expérience en Product Design, j'aide les entreprises 
              à créer des expériences digitales qui marquent les esprits et génèrent des résultats concrets.
            </p>

            <p className="text-gray-600 mb-8">
              Ma philosophie ? Allier esthétique et fonctionnalité pour concevoir des interfaces 
              qui non seulement séduisent, mais surtout facilitent la vie de vos utilisateurs. 
              Chaque pixel a sa raison d'être.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                UX/UI Design
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Product Strategy
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Design System
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                Prototypage
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;