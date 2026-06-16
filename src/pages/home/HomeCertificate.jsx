import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeCertificateImg from "../../assets/HomeCertificate.png";
import ZoomInComponent from "../../ui/ZoomInComponent";

const COLORS = [
  "#FF5A5F",
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
];

const CompanyLogo = ({ name, icon }) => (
  <div className="flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
    <span className="text-emerald-500 font-bold text-lg">{icon}</span>
    <span className="text-xs font-bold tracking-tight text-slate-800 uppercase">
      {name}
    </span>
  </div>
);

const Particle = ({ delay, color, angle, distance }) => {
  const rad = (angle * Math.PI) / 180;
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
      animate={{
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * distance,
        opacity: [1, 1, 0],
        scale: [0, 1.5, 0.5],
        rotate: [0, 360],
      }}
      transition={{
        duration: 2.5,
        delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      className="absolute w-2 h-2 rounded-full pointer-events-none z-50"
      style={{ backgroundColor: color }}
    />
  );
};

export default function HomeCertificate() {
  const [isOpen, setIsOpen] = useState(false);

  const staticParticles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        delay: Math.random() * 0.4,
        color: COLORS[i % COLORS.length],
        angle: Math.random() * 360,
        distance: Math.random() * 300 + 150,
      })),
    [],
  );

  return (
    <section>
      <ZoomInComponent>
        <div className="w-full bg-white flex items-center justify-center py-10">
          <div className="w-[1230px] h-[500px] font-sans flex items-center justify-between bg-white px-16 relative box-border">
            <div className="flex flex-col justify-center max-w-sm z-10">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Createx Certificate
              </span>
              <h2 className="text-4xl font-extrabold text-[#111827] mt-3 mb-6 leading-tight tracking-tight">
                Your expertise will
                <br />
                be confirmed
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-10 max-w-[280px]">
                We are accredited by international professional organizations
                and institutes:
              </p>
              <div className="flex items-center gap-6">
                <CompanyLogo name="Del Mar Strategy" icon="⟁" />
                <CompanyLogo name="Sentinal Consulting" icon="☰" />
                <CompanyLogo name="National" icon="💚" />
              </div>
            </div>

            <div className="w-[580px] h-[400px] flex items-center justify-center relative">
              <div
                onClick={() => setIsOpen(true)}
                className="w-full h-full bg-slate-50 rounded-lg border border-gray-200 flex items-center justify-center cursor-zoom-in group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex flex-col items-center justify-center">
                  <span className="bg-white/95 text-gray-800 text-xs font-bold px-3 py-2 rounded-full shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 tracking-wide flex items-center gap-1.5">
                    🔍 Click to expand
                  </span>
                </div>
                <img
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300 p-2"
                  src={HomeCertificateImg}
                  alt="Certificate Preview"
                />
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-zoom-out"
                  />

                  <div className="relative z-10 flex items-center justify-center pointer-events-none">
                    {staticParticles.map((p) => (
                      <Particle key={p.id} {...p} />
                    ))}

                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{
                        type: "spring",
                        damping: 22,
                        stiffness: 260,
                      }}
                      className="w-[850px] h-[600px] bg-white rounded-xl shadow-2xl p-6 flex items-center justify-center border border-gray-100 relative pointer-events-auto"
                    >
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-white text-gray-500 flex items-center justify-center hover:bg-red-50 hover:text-red-500 font-bold transition-all text-sm shadow-md border border-gray-200"
                      >
                        ✕
                      </button>
                      <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-white">
                        <img
                          src={HomeCertificateImg}
                          className="w-full h-full object-contain"
                          alt="Enlarged Certificate"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </ZoomInComponent>
    </section>
  );
}
