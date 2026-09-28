"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Phone,
  Briefcase,
  GraduationCap,
  Database,
  Cpu
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      name: "Vicer Support",
      desc: "Portal corporativo y de soporte técnico desarrollado durante mis prácticas profesionales en Active Process.",
      tags: ["WordPress", "HTML", "CSS", "JavaScript"],
      url: "https://staging2.vicer.support/?lang=es",
      icon: <Briefcase className="w-6 h-6 text-yellow-400" />
    },
    {
      name: "K3 Home Style",
      desc: "E-commerce para diseño de interiores. Construido con React, TypeScript y Vite.",
      tags: ["React", "TypeScript", "Vite", "CSS"],
      url: "https://github.com/Lorenara04/K3homeStyle",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />
    },
    {
      name: "Bot Jurídicas Bogotá",
      desc: "Bot automatizado para firma de abogados con integración de IA.",
      tags: ["JavaScript", "IA", "Automatización"],
      url: "https://github.com/Lorenara04/BOT-JURIDICAS-BOGOTA",
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      name: "POS La Cosmetiquera",
      desc: "Sistema POS para gestión y facturación de la tienda.",
      tags: ["HTML", "Python", "Flask"],
      url: "https://github.com/Lorenara04/POS-LA-COSMETIQUERA-DE-GABI",
      icon: <Code2 className="w-6 h-6 text-pink-400" />
    }
  ];

  const experience = [
    {
      company: "Active Process",
      role: "Ingeniera de Software Junior (Prácticas)",
      period: "Jun 2025 – Dic 2025",
      points: [
        "Desarrollo de aplicaciones web full stack utilizando JavaScript, Node.js y PHP.",
        "Implementación de funcionalidades backend y frontend orientadas a soluciones empresariales.",
        "Automatización de procesos mediante bots e integración con Google Sheets.",
        "Gestión y optimización de bases de datos SQL."
      ]
    },
    {
      company: "Fábrica Soluciones",
      role: "Desarrollo Junior (Prácticas)",
      period: "Jun 2024 – Dic 2024",
      points: [
        "Desarrollo de funcionalidades frontend y backend utilizando HTML, CSS, JavaScript y Node.js.",
        "Atención y resolución de incidencias técnicas, brindando soporte a usuarios.",
        "Documentación de procesos y soluciones para mejora continua del equipo."
      ]
    }
  ];

  const education = [
    {
      school: "Uniempresarial",
      degree: "Ingeniería de Software",
      period: "2023 - Actual"
    },
    {
      school: "SENA",
      degree: "Técnico Programación de Software",
      period: "2016 - 2017"
    },
    {
      school: "Dev Senior",
      degree: "Enterprise Full Stack with Spring Boot 4 and Angular 21 (Curso Corto)",
      period: "2026"
    },
    {
      school: "Udemy",
      degree: "n8n + MCP: Automatización y agentes de IA inteligentes",
      period: "2026"
    }
  ];

  return (
    <div className="min-h-screen bg-grid relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Header/Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-10 md:mt-20"
        >
          <div className="text-center md:text-left flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              Disponible para trabajar
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Hola, soy <span className="text-cyan-400 neon-text block mt-2">Lorena Rodríguez Ramos</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0">
              Ingeniera de software en formación con experiencia en desarrollo web, automatización de procesos e integración de Inteligencia Artificial. Me enfoco en soluciones prácticas y eficientes.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <a href="https://github.com/Lorenara04" target="_blank" rel="noreferrer" 
                 className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-cyan-500/50 hover:bg-zinc-800 transition-all neon-box" title="GitHub">
                <FaGithub className="w-5 h-5 text-zinc-300" />
              </a>
              <a href="https://linkedin.com/in/lorena-rodriguez-ramos" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-cyan-500/50 hover:bg-zinc-800 transition-all neon-box" title="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-zinc-300" />
              </a>
              <a href="mailto:lorenarodriguezr155@gmail.com" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-cyan-500/50 hover:bg-zinc-800 transition-all neon-box" title="Email">
                <Mail className="w-5 h-5 text-zinc-300" />
              </a>
              <a href="https://wa.me/573222823687" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-cyan-500/50 hover:bg-zinc-800 transition-all neon-box text-sm text-zinc-300">
                <Phone className="w-4 h-4" /> +57 322 2823687
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-zinc-800 overflow-hidden neon-box shadow-2xl">
              <Image 
                src="/profile.png" 
                alt="Lorena Rodríguez Ramos" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-semibold mb-10 flex items-center justify-center md:justify-start gap-3">
            <Briefcase className="w-8 h-8 text-purple-400" /> Experiencia Profesional
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
                    <p className="text-purple-400 font-medium">{job.company}</p>
                  </div>
                  <span className="text-zinc-500 text-sm bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 inline-block w-max">
                    {job.period}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-400">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32">
          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-cyan-400" /> Habilidades
            </h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python (Django)", "Node.js", "PHP", "X++"].map(skill => (
                    <span key={skill} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React"].map(skill => (
                    <span key={skill} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">Bases de Datos & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Docker", "Render", "Hostinger"].map(skill => (
                    <span key={skill} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">IA & Automatización</h4>
                <div className="flex flex-col gap-2">
                  {["Selenium", "Integración de APIs de IA", "Automatización de tareas asistidas por IA", "Generación de contenido y procesamiento de datos con IA"].map(skill => (
                    <span key={skill} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-pink-400" /> Educación
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group hover:border-pink-500/30 transition-all">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{edu.degree}</h3>
                  <p className="text-pink-400 font-medium mb-3">{edu.school}</p>
                  <span className="text-zinc-500 text-sm bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-semibold mb-10 flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-[2px] bg-cyan-500"></span> Proyectos Destacados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-colors group flex flex-col"
              >
                <div className="bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:neon-box transition-all">
                  {project.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{project.name}</h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-zinc-800 rounded-full text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.url} target="_blank" rel="noreferrer" 
                   className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium mt-auto">
                  Ver en GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-32 border-t border-zinc-800/50 pt-8 pb-12 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Lorena Rodríguez Ramos. Construido con Next.js y Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}
