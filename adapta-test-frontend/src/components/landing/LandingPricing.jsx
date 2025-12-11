import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import planService from '../../features/plans/planService';

const LandingPricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // En un caso real, esto vendría del backend.
        // Simularemos o usaremos el servicio si tiene datos.
        const data = await planService.getPlans();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans:", error);
        // Fallback dummy data si no hay backend listo o falla
        setPlans([
          {
            _id: '1',
            name: 'Starter',
            price: 0,
            features: ['Acceso básico a cursos', '10 Evaluaciones/mes', 'Soporte por email', 'Comunidad'],
            recommended: false
          },
          {
            _id: '2',
            name: 'Pro',
            price: 29,
            features: ['Cursos ilimitados', 'Evaluaciones ilimitadas', 'Certificados oficiales', 'Tutoría 1 a 1', 'Acceso offline'],
            recommended: true
          },
          {
            _id: '3',
            name: 'Institution',
            price: 99,
            features: ['Panel administrativo', 'Múltiples instructores', 'Analíticas avanzadas', 'Integración LMS', 'Dominio personalizado'],
            recommended: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Planes Flexibles
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades de aprendizaje.
        </p>
        
        {/* Toggle Mensual/Anual (Visual) */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Mensual</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-muted rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className={`w-5 h-5 bg-indigo-600 rounded-full absolute top-1 transition-transform ${isAnnual ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Anual <span className="text-xs text-green-500 font-bold ml-1">-20%</span>
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan._id}
              variants={itemVariants}
              className={`relative rounded-3xl p-8 border backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col
                ${plan.recommended 
                  ? 'bg-white/10 dark:bg-black/40 border-indigo-500/50 shadow-indigo-500/20' 
                  : 'bg-white/5 dark:bg-white/5 border-white/10 hover:border-white/20'
                }
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Más Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  ${isAnnual ? (plan.price * 12 * 0.8).toFixed(0) : plan.price}
                </span>
                <span className="text-muted-foreground ml-2">/{isAnnual ? 'año' : 'mes'}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all
                ${plan.recommended
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-white text-black hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                }
              `}>
                Comenzar
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default LandingPricing;
