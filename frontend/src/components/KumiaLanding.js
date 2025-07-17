import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Smartphone, 
  Calendar, 
  MessageSquare, 
  Heart,
  Gift,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Sparkles,
  Shield,
  Zap,
  Crown,
  Menu,
  X
} from "lucide-react";
import "../styles/KumiaLanding.css";

const KumiaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero background images showcasing different restaurant types
  const heroImages = [
    "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3", // Hotel/Premium dining
    "https://images.unsplash.com/photo-1581934469832-1c14854646bf", // Casual dining
    "https://images.unsplash.com/photo-1650894001076-f75ec81619c9", // Fine dining
    "https://images.unsplash.com/photo-1599549211246-7065b775aa7b"  // Kitchen/Bar
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-cycle through hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const businessTypes = [
    {
      title: "Restaurante Tradicional",
      description: "Moderniza tu servicio con tecnología intuitiva",
      benefits: ["Cartas digitales", "Gestión de reservas", "Feedback instantáneo"],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Restaurante Gourmet",
      description: "Experiencia premium para comensales exigentes",
      benefits: ["Presentación elegante", "Recompensas exclusivas", "Análisis detallado"],
      icon: <Crown className="w-8 h-8" />
    },
    {
      title: "Bar / Pub",
      description: "Ambiente social potenciado digitalmente",
      benefits: ["Menú de bebidas interactivo", "Eventos especiales", "Lealtad gamificada"],
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Cafetería / Brunch",
      description: "Convierte visitas matutinas en hábitos",
      benefits: ["Pedidos rápidos", "Programas de lealtad", "Reseñas visuales"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Hotel con Restaurante",
      description: "Integración perfecta para huéspedes y externos",
      benefits: ["Reservas omnicanal", "Experiencia unificada", "Métricas completas"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cocina Virtual",
      description: "Optimiza tu delivery y take-away",
      benefits: ["Menú digital optimizado", "Reseñas con imagen", "Análisis de tendencias"],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Escanea QR o entra por link",
      description: "Acceso instantáneo sin apps adicionales",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Accede a la carta digital o hace una reserva",
      description: "Navegación intuitiva y diseño atractivo",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: "03",
      title: "El agente AI responde preguntas",
      description: "Asistencia inteligente 24/7",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: "04",
      title: "El cliente ordena y paga (opcional)",
      description: "Proceso fluido y seguro",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Al finalizar, deja feedback y recibe recompensas",
      description: "Gamificación que genera lealtad",
      icon: <Gift className="w-6 h-6" />
    },
    {
      step: "06",
      title: "Se guarda su historial y NFTs en su Wallet",
      description: "Construcción de reputación digital",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const successCases = [
    {
      business: "Parrilla Buenos Aires",
      metric: "+20%",
      description: "reservas repetidas",
      detail: "Incremento significativo en clientes recurrentes mediante gamificación",
      image: "https://images.unsplash.com/photo-1581934469832-1c14854646bf"
    },
    {
      business: "Wine Bar Elegante",
      metric: "+10%",
      description: "ticket promedio",
      detail: "Aumento en ventas por sugerencias personalizadas de IA",
      image: "https://images.unsplash.com/photo-1650894001076-f75ec81619c9"
    },
    {
      business: "Hotel Boutique",
      metric: "+40%",
      description: "reservas externas",
      detail: "Integración omnicanal que atrae clientes no hospedados",
      image: "https://images.unsplash.com/photo-1647249893022-9287c83b8cc3"
    },
    {
      business: "Cloud Kitchen",
      metric: "+15%",
      description: "reseñas con imagen/video",
      detail: "Mayor engagement visual mejora la percepción del servicio",
      image: "https://images.unsplash.com/photo-1599549211246-7065b775aa7b"
    }
  ];

  const plans = [
    {
      name: "Essentials",
      price: "$149",
      period: "USD mensual",
      setup: "$499",
      description: "Perfecto para comenzar tu transformación digital",
      features: [
        "Carta digital inteligente",
        "Reservas omnicanal",
        "IA para consultas básicas",
        "Feedback de texto",
        "NFTs básicos",
        "Wallet visual"
      ],
      nft: "Básico",
      ai: true,
      feedback: "Texto",
      wallet: true,
      popular: false,
      gradient: "from-gray-900 to-gray-800"
    },
    {
      name: "Pro",
      price: "$249", 
      period: "USD mensual",
      setup: "$999",
      description: "Experiencia completa con branding personalizado",
      features: [
        "Todo lo de Essentials",
        "Branding completo personalizado",
        "Feedback con imagen y video",
        "NFTs dinámicos",
        "Analíticas avanzadas",
        "Soporte prioritario"
      ],
      nft: "Dinámico",
      ai: true,
      feedback: "Imagen/Video",
      wallet: true,
      popular: true,
      gradient: "from-amber-600 to-orange-600"
    },
    {
      name: "Elite",
      price: "$349",
      period: "USD mensual", 
      setup: "$1999",
      description: "La experiencia más premium con IA avanzada",
      features: [
        "Todo lo de Pro",
        "NFTs coleccionables únicos",
        "IA con Machine Learning",
        "UX personalizada por cliente",
        "Feedback con IA avanzada",
        "Gestor de cuenta dedicado"
      ],
      nft: "Coleccionables",
      ai: true,
      feedback: "IA + ML",
      wallet: true,
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  const navigation = [
    { name: "Inicio", href: "#hero" },
    { name: "Producto", href: "#que-es" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Precios", href: "#precios" },
    { name: "Casos de Éxito", href: "#casos" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                KUMIA
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('cta-final')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-2 rounded-full font-semibold text-black hover:from-amber-400 hover:to-orange-500 transition-all duration-300 shadow-lg"
              >
                Activar KUMIA
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('cta-final')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 rounded-md font-semibold text-black hover:from-amber-400 hover:to-orange-500 transition-all duration-300 mt-2"
              >
                Activar KUMIA
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background image slideshow */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                transform: `translateY(${scrollY * 0.5}px)`
              }}
            />
          ))}
          
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-amber-400 w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Donde la{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                experiencia
              </span>
              <br />
              se convierte en{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                capital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Activa tu restaurante inteligente con IA, recompensas y experiencias digitales que convierten cada visita en una oportunidad de crecimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('precios')}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full font-semibold text-lg text-black hover:from-amber-400 hover:to-orange-500 transition-all duration-300 shadow-2xl flex items-center space-x-2"
              >
                <span>Quiero activar KUMIA en mi negocio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-400/50 rounded-full font-semibold text-lg text-amber-400 hover:bg-amber-400/10 transition-all duration-300 backdrop-blur-sm"
              >
                Reservar llamada gratuita
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* What is KUMIA Section */}
      <section id="que-es" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Qué es{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                KUMIA?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una solución modular completa que transforma tu negocio gastronómico en una experiencia digital inteligente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Carta Digital Inteligente",
                description: "Menús interactivos que se adaptan y sugieren opciones personalizadas",
                icon: <Smartphone className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Reservas Omnicanal",
                description: "Gestión unificada de reservas desde cualquier plataforma",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "IA para Sugerencias",
                description: "Asistente virtual que responde dudas y recomienda platos",
                icon: <MessageSquare className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Feedback con Recompensas",
                description: "Sistema de reseñas gamificado que incentiva la participación",
                icon: <Gift className="w-8 h-8" />,
                color: "from-amber-500 to-orange-500"
              },
              {
                title: "Sistema de Lealtad",
                description: "Programa gamificado con NFTs, puntos y niveles de recompensa",
                icon: <Crown className="w-8 h-8" />,
                color: "from-red-500 to-rose-500"
              },
              {
                title: "Wallet Visual",
                description: "Billetera digital donde los clientes guardan sus logros y recompensas",
                icon: <Heart className="w-8 h-8" />,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Business Type */}
      <section id="beneficios" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beneficios por{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tipo de Negocio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada negocio es único. KUMIA se adapta a las necesidades específicas de tu industria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white mr-4">
                      {business.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{business.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{business.description}</p>
                  <ul className="space-y-2">
                    {business.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Cómo Funciona
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un proceso simple y natural que transforma la experiencia de tus clientes
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center group hover:border-gray-600/50 transition-all duration-300">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Rewards System */}
      <section id="recompensas" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sistema de Recompensas{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Gamificado
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gana puntos por cada acción. Sube de nivel. Construye tu reputación digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Básico", color: "from-gray-500 to-gray-600", description: "Primer nivel" },
                  { name: "Bronce", color: "from-orange-600 to-amber-600", description: "5 visitas" },
                  { name: "Plata", color: "from-gray-400 to-gray-500", description: "15 visitas" },
                  { name: "Oro", color: "from-yellow-400 to-amber-500", description: "30 visitas" }
                ].map((nft, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-br ${nft.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                        <Crown className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm">{nft.name}</h4>
                      <p className="text-xs text-gray-400">{nft.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                  Beneficios del Sistema
                </h3>
                <ul className="space-y-3">
                  {[
                    "Descuentos exclusivos por nivel",
                    "Acceso prioritario a eventos",
                    "Recompensas personalizadas",
                    "NFTs coleccionables únicos"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Crown className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Wallet Digital</h3>
                  <p className="text-gray-300">Tu colección de logros y recompensas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section id="casos" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Casos de Éxito
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados reales de negocios que ya transformaron su experiencia con KUMIA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${case_.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text mb-1">
                        {case_.metric}
                      </div>
                      <div className="text-lg text-white font-semibold">{case_.description}</div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{case_.business}</h4>
                      <p className="text-gray-300 text-sm">{case_.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Call CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                descubrir tu potencial?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Reserva una llamada gratuita de 30 minutos con nuestro equipo y descubre cómo KUMIA puede transformar tu negocio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full font-semibold text-lg text-black hover:from-amber-400 hover:to-orange-500 transition-all duration-300 shadow-2xl flex items-center space-x-2"
              >
                <span>Reservar llamada gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('precios')}
                className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300"
              >
                Ver planes y precios
              </motion.button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              ✓ Sin compromiso   ✓ Análisis personalizado   ✓ Estrategia a medida
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Planes y Precios
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elige el plan perfecto para tu negocio. Comienza tu transformación digital hoy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${plan.popular ? 'md:scale-110 md:z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                )}
                
                <div className={`h-full bg-gradient-to-br ${plan.gradient} p-0.5 rounded-2xl`}>
                  <div className="h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                      <div className="text-sm text-gray-300 mb-4">
                        <span className="font-semibold">Setup único: </span>
                        <span className="text-amber-400">{plan.setup}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black hover:from-amber-400 hover:to-orange-500' 
                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                        }`}
                      >
                        Solicitar este plan
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 border-2 border-amber-400/50 rounded-full font-semibold text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
                      >
                        Reservar llamada gratuita
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-final" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              ¿Listo para activar tu{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                experiencia KUMIA?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Únete a los restaurantes que ya están transformando sus negocios con tecnología inteligente y experiencias premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full font-semibold text-lg text-black hover:from-amber-400 hover:to-orange-500 transition-all duration-300 shadow-2xl flex items-center space-x-2"
              >
                <span>Inicia tu activación ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-400/50 rounded-full font-semibold text-lg text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
              >
                Reservar llamada gratuita
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  KUMIA
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando restaurantes con tecnología inteligente y experiencias premium.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de éxito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estado del sistema</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Login clientes</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KUMIA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Términos de servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KumiaLanding;