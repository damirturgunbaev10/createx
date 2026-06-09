import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HomeSubscriptionImg from "../../assets/HomeSubscriptionImg.svg";
function CoursesSubsciption() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="w-full bg-[#FED7CD] relative overflow-hidden pt-16 pb-0 mb-0 px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center min-h-[400px]">
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 left-1/4 w-32 h-32 border-4 border-dashed border-[#FF5A36] rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-1/4 w-6 h-6 bg-[#FF5A36] rounded-full"
        />
      </div>

      <div className="absolute left-0 bottom-0 w-1/4 max-w-[280px] hidden md:block select-none pointer-events-none">
        <img
          src={HomeSubscriptionImg}
          alt="Graduation Celebration Left"
          className="w-full object-contain origin-bottom-left"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-1/4 max-w-[280px] hidden md:block select-none pointer-events-none">
        <img
          src={HomeSubscriptionImg}
          alt="Graduation Celebration Right"
          className="w-full object-contain origin-bottom-right"
        />
      </div>

      <div className="max-w-2xl w-full text-center z-10 flex flex-col items-center">
        <span className="text-xs font-bold tracking-widest text-slate-700 uppercase mb-3 block">
          Don't miss anything
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2131] leading-snug tracking-tight max-w-xl mb-8">
          Subscribe to the Createx School announcements
        </h2>

        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form
              key="subscription-form"
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="w-full max-w-lg flex flex-col sm:flex-row items-stretch gap-3 relative"
            >
              <div className="relative flex-1 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "loading"}
                  placeholder="Your working email"
                  className={`w-full px-5 py-3.5 bg-white text-slate-800 text-sm font-medium rounded-lg border outline-none shadow-sm transition-all duration-300 placeholder:text-slate-400
                    ${
                      status === "error"
                        ? "border-red-500 focus:border-red-500 ring-2 ring-red-100"
                        : "border-slate-200 focus:border-[#FF5A36] focus:ring-4 focus:ring-[#FF5A36]/10"
                    }`}
                />

                <AnimatePresence>
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute left-2 -bottom-6 text-xs text-red-600 font-semibold"
                    >
                      Please enter a valid email address.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
                type="submit"
                className="bg-[#FF5A36] hover:bg-[#E04826] text-white text-sm font-bold tracking-wide px-8 py-3.5 sm:py-0 rounded-lg transition-colors duration-200 shadow-md flex items-center justify-center min-w-[130px]"
              >
                {status === "loading" ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", damping: 15 },
              }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white max-w-md w-full shadow-xl flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-lg">
                  You're on the list!
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Thank you for subscribing. We will keep you updated with our
                  latest news.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-xs text-[#FF5A36] font-bold hover:underline mt-2"
              >
                Subscribe another email
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default CoursesSubsciption;
