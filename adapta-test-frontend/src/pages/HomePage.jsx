import { BlurFade } from "../components/ui/blur-fade";
import { HyperText } from "../components/ui/hyper-text";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { motion, useReducedMotion } from "framer-motion";
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import ModernTeamShowcase from "../components/cybernetic-team-showcase";
import { HoverButton } from "../components/ui/hover-button";
import { LogoCarousel } from "../components/ui/logo-carousel";
import VideoPlayer from "../components/ui/video-player";
import { Text_03 } from '../components/ui/wave-text';
import LandingFeatures from "../components/landing/LandingFeatures";
import LandingPricing from "../components/landing/LandingPricing";

const logos = [
  { 
    id: 'utp-1', 
    img: () => <img src="https://i.postimg.cc/28Gn6t3s/Bolt.png" alt="UTP" className="w-full h-full object-contain" /> 
  },
  { 
    id: 'utp-2', 
    img: () => <img src="https://i.postimg.cc/FHncbJyG/supabase.png" alt="UTP" className="w-full h-full object-contain" /> 
  },
  { 
    id: 'utp-3', 
    img: () => <img src="https://i.postimg.cc/SQW60R4N/Pica.png" alt="UTP" className="w-full h-full object-contain" /> 
  },
  { 
    id: 'utp-4', 
    img: () => <img src="https://i.postimg.cc/L62zmS4k/netlify.png" alt="UTP" className="w-full h-full object-contain" /> 
  },
  { 
    id: 'utp-5', 
    img: () => <img src="https://i.postimg.cc/0yNDJCwb/Eleven-Labs.png" className="w-full h-full object-contain" /> 
  },
  { 
    id: 'utp-6', 
    img: () => <img src="https://i.postimg.cc/VvBnXGgb/21.png" className="w-full h-full object-contain" /> 
  },
];

const teamData = [
    { name: 'Aldair Doloriert', title: 'Backend', avatar: 'https://i.ibb.co/w2wbpg6/2.jpg', socials: { github: 'https://github.com/ezzADJG', instagram: "https://www.instagram.com/aldair.d14" } },
    { name: 'Rodrigo Trigoso', title: 'Frontend', avatar: 'https://i.ibb.co/fzxDpnZ8/1.png', socials: { github: 'https://github.com/rtrigoso1425', instagram: "https://www.instagram.com/rtrigoso1425" } }
];

const footerLinks = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'Testimonials', href: '#testimonials' },
      { title: 'Integration', href: '/' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Services', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Brand', href: '/brand' },
      { title: 'Help', href: '/help' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#', icon: () => <FacebookIcon className="w-5 h-5"/> },
      { title: 'Instagram', href: '#', icon: () => <InstagramIcon className="w-5 h-5"/> },
      { title: 'Youtube', href: '#', icon: () => <YoutubeIcon className="w-5 h-5"/> },
      { title: 'LinkedIn', href: '#', icon: () => <LinkedinIcon className="w-5 h-5"/> },
    ],
  },
];

// Header Component
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <header className="px-6 py-4 flex justify-between items-center bg-white/20 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div className="flex items-center">
         <img src="https://i.postimg.cc/8zws4X2C/Logo-Adapta-Test.png" alt="AdaptaTest Logo" className="h-10 w-auto mr-3" />
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-foreground hover:text-indigo-500 font-medium transition-colors">Características</a>
        <a href="#pricing" className="text-foreground hover:text-indigo-500 font-medium transition-colors">Planes</a>
        <a href="#developers" className="text-foreground hover:text-indigo-500 font-medium transition-colors">Equipo</a>
      </nav>
      <div className="flex items-center space-x-4">
        {user ? (
           <HoverButton onClick={onLogout} className="bg-red-500 hover:bg-red-600 text-white">
             Logout
           </HoverButton>
        ) : (
          <>
            <Link to="/login" className="text-foreground hover:text-indigo-500 font-medium transition-colors">Login</Link>
            <Link to="/register">
               <HoverButton className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
                 Empezar
               </HoverButton>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Dynamic Background with Noise and Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Noise Texture */}
         <div className="absolute inset-0 opacity-[0.03] sm:opacity-[0.05]" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
         </div>
         
         {/* Animated Blobs */}
         <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-500/30 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
         <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-pink-500/30 dark:bg-pink-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <Header />

      <main className="relative z-10 scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 px-6 relative w-full flex flex-col items-center text-center">
            <BlurFade delay={0.2} inView>
               <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30 px-3 py-1 text-sm text-indigo-800 dark:text-indigo-300 backdrop-blur-sm mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
                  Presentamos AdaptaTest 2.0
               </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground max-w-5xl mx-auto mb-6 leading-[1.1]">
                Aprendizaje que <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
                   se adapta a ti
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.4} inView>
               <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                 La plataforma LMS potenciada por IA que personaliza cada paso de tu educación universitaria.
               </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <Link to="/register">
                    <HoverButton className="h-14 px-8 text-lg bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      Comenzar Ahora - Gratis
                    </HoverButton>
                 </Link>
                 <Link to="/about">
                    <button className="h-14 px-8 text-lg text-foreground font-medium hover:bg-foreground/5 rounded-full transition-colors border border-foreground/10 hover:border-foreground/20 backdrop-blur-sm">
                       Ver Demo
                    </button>
                 </Link>
              </div>
            </BlurFade>

            {/* Video Preview */}
            <div className="mt-20 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/5 backdrop-blur-sm relative group">
                <VideoPlayer src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
        </section>

        {/* LOGO CAROUSEL */}
        <div className="py-12 w-full border-y border-white/10 bg-white/5 backdrop-blur-sm">
           <LogoCarousel logos={logos} />
        </div>

        {/* FEATURES SECTION */}
        <LandingFeatures />

        {/* PRICING SECTION */}
        <LandingPricing />

        {/* DEVELOPERS SECTION */}
        <div id="developers" className="py-24 bg-gradient-to-b from-transparent to-indigo-900/10">
           <ModernTeamShowcase teamMembers={teamData} />
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
              <div className="col-span-2 lg:col-span-2">
                 <img src="https://i.postimg.cc/8zws4X2C/Logo-Adapta-Test.png" alt="Logo" className="h-12 w-auto mb-6" />
                 <p className="text-muted-foreground max-w-xs mb-6">
                    Revolucionando la educación universitaria con inteligencia artificial y diseño centrado en el humano.
                 </p>
                 <div className="flex space-x-4">
                     {footerLinks[3].links.map((social, idx) => {
                       const Icon = social.icon();
                       return (
                         <a key={idx} href={social.href} className="text-muted-foreground hover:text-indigo-500 transition-colors">
                           {Icon}
                         </a>
                       )
                     })}
                 </div>
              </div>
              
              {footerLinks.slice(0,3).map((column, idx) => (
                <div key={idx}>
                   <h4 className="font-bold text-lg mb-6 text-foreground">{column.label}</h4>
                   <ul className="space-y-4">
                      {column.links.map((link, lIdx) => (
                        <li key={lIdx}>
                           <Link to={link.href} className="text-muted-foreground hover:text-indigo-500 transition-colors">
                             {link.title}
                           </Link>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
             <p>&copy; 2024 AdaptaTest. Todos los derechos reservados.</p>
             <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-foreground">Privacidad</a>
               <a href="#" className="hover:text-foreground">Términos</a>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;