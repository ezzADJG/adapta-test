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
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
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
    <header className="px-6 py-4 flex justify-between items-center bg-transparent backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold font-heading text-foreground flex items-center gap-2 group">
           <div className="h-8 w-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black text-sm font-bold">A</span>
           </div>
           <span className="group-hover:opacity-80 transition-opacity">AdaptaTest</span>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6 items-center list-none m-0 p-0">
          {user ? (
            <>
              <li>
                <HoverButton as={Link} to="/dashboard" className="font-medium text-sm">
                  Dashboard
                </HoverButton>
              </li>
              <li>
                <HoverButton onClick={onLogout} className="font-medium text-sm text-muted-foreground hover:text-destructive transition-colors">
                  Logout
                </HoverButton>
              </li>
            </>
          ) : (
            <li>
              <HoverButton as={Link} to="/login" className="font-medium text-sm">
                Login
              </HoverButton>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

// Footer Component
function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}>
      {children}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer
      className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div
        className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <FrameIcon className="size-8" />
          <p className="text-muted-foreground mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} Adapta Test. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300">
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="bg-background text-foreground w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
         <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Header */}
      <div className="z-50 relative">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="w-full flex-1 relative z-10 font-sans flex flex-col justify-center">
        <div className="flex flex-col items-center text-center px-6 lg:px-10 pt-16 pb-20 max-w-5xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="space-y-6">
            <BlurFade delay={0.2} inView>
              <div className="flex justify-center mb-6">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="https://i.ibb.co/C3m7Fzr2/logo.png" 
                    alt="Logo" 
                    className="relative w-32 h-32 md:w-40 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                  />
                </div>
              </div>
            </BlurFade>

            <div className="space-y-4">
              <BlurFade delay={0.4} inView>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                  AdaptaTest
                </h1>
              </BlurFade>
              <BlurFade delay={0.6} inView>
                <HyperText
                  className="text-xl md:text-2xl font-light text-muted-foreground"
                  text="Adaptando la forma de aprender"
                />
              </BlurFade>
            </div>
          </div>

          {/* Social Proof */}
          <BlurFade delay={0.8} inView className="w-full">
            <div className="flex flex-col items-center space-y-8 mt-8">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Confían en nosotros</span>
              <div className="w-full max-w-4xl bg-card/30 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                <LogoCarousel 
                  logos={logos} 
                  columnCount={4}
                />
              </div>
            </div>
          </BlurFade>

          {/* Team Section */}
          <BlurFade delay={1.0} inView className="w-full pt-10">
             <ModernTeamShowcase teamMembers={teamData} />
          </BlurFade>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;