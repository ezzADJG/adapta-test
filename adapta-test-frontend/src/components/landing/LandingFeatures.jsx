import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Share2, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: "IA Adaptativa",
    description: "Nuestros algoritmos ajustan el contenido en tiempo real según tu ritmo de aprendizaje."
  },
  {
    icon: Layers,
    title: "Mallas Flexibles",
    description: "Diseña currículos académicos complejos que se adaptan a múltiples carreras y ciclos."
  },
  {
    icon: Share2,
    title: "Colaboración Real",
    description: "Herramientas integradas para que estudiantes y profesores conecten sin fricción."
  },
  {
    icon: BarChart3,
    title: "Analíticas Profundas",
    description: "Dashboards detallados para entender el progreso y detectar áreas de mejora."
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Enterprise",
    description: "Tus datos académicos protegidos con los estándares más altos de la industria."
  },
  {
    icon: Zap,
    title: "Performance Extrema",
    description: "Una experiencia fluida y rápida, optimizada para cualquier dispositivo."
  }
];

const LandingFeatures = () => {
  return (
    <section id="features" className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Potencia tu Educación
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Descubre por qué las mejores instituciones eligen AdaptaTest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LandingFeatures;
