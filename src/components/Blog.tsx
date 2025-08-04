import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "Comment construire son portfolio de Product Designer",
      excerpt: "Les clés pour créer un portfolio qui vous démarque et attire les recruteurs dans le domaine du Product Design.",
      date: "15 Mars 2024",
      author: "Romain DAO",
      category: "Portfolio",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min"
    },
    {
      title: "Les tendances UX/UI à suivre en 2024",
      excerpt: "Découvrez les dernières tendances en matière de design d'interface et d'expérience utilisateur pour rester à la pointe.",
      date: "8 Mars 2024",
      author: "Romain DAO",
      category: "Tendances",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min"
    },
    {
      title: "Maîtriser Figma : Guide complet pour débutants",
      excerpt: "Un guide pratique pour apprendre les bases de Figma et créer vos premiers designs professionnels.",
      date: "1 Mars 2024",
      author: "Romain DAO",
      category: "Formation",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Derniers articles du
            <span className="text-primary-600"> blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conseils, tutoriels et réflexions sur le Product Design, l'UX/UI 
            et les dernières tendances du secteur.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {article.readTime}
                  </span>
                </div>

                {/* Read More */}
                <button className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 group">
                  <span>Lire l'article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-slide-up">
          <a
            href="#"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;