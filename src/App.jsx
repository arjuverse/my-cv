import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWater
} from "react-icons/fa"

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[150px]" />

      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="flex items-center gap-3 text-cyan-400 mb-6">

              <FaWater />

              <p className="uppercase tracking-[0.3em] text-sm">
                Oceanographer & Researcher
              </p>

            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">

              Arjun
              <span className="text-cyan-400"> K Sabu</span>

            </h1>

            <p className="text-slate-300 text-lg mt-8 leading-8 max-w-xl">

              Focused on Upper layer temperature and salinity variability, Indian Ocean, Bay of Bengal,  
              Field Deployments, In-situ data collection and processing, and Quality control etc. . .
              

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/my-cv/resume.pdf"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold no-underline"
              >
                Download CV
              </a>

              <a
                href="#research"
                className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-500/10 transition no-underline text-white"
              >
                View Research
              </a>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10 text-2xl backdrop-blur-xl bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">

              <a 
                href="https://github.com/arjuverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition duration-300"
              >
                <FaGithub />
              </a>

              <a 
                href="https://www.linkedin.com/in/arjuverse/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="hover:text-cyan-400 hover:scale-125 transition duration-300"
              >
                <FaEnvelope />
              </a>


            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* GLOW RING */}
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 scale-110" />

              <img
                src="/my-cv/profile.jpg"
                alt="profile"
                className="relative w-[340px] h-[340px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-5xl font-bold mb-12 text-cyan-400">
              About Me
            </h2>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">

              <p className="text-slate-300 text-lg leading-9">
              Early-career oceanographer with a strong background in physical
              oceanography and data analysis. Experienced in handling in-situ and other
              datasets, conducting fieldwork, and applying computational tools to study
              salinity, temperature, and coastal dynamics. Interested in advancing
              research on climate variability and ocean-atmosphere interactions.
                

              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section
        id="research"
        className="py-32 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold text-cyan-400 mb-20">
            Professional Experience
          </h2>

          <div className="border-l border-cyan-500 pl-10 space-y-16">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">

                <p className="text-cyan-400 mb-2">
                  July 2023 - Present
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  Project Associate I, CSIR-NIO, Goa                </h3>

                <p className="text-slate-300 leading-8">

                  Oceanographic research focused on upper layer temperature and salinity variability in the Indian Ocean and Bay of Bengal.
                  Conducted field deployments, collected and processed in-situ data, and performed quality control to ensure data integrity.
                  Utilized computational tools for data analysis and visualization, contributing to a deeper understanding of oceanographic processes.
                </p>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">

                <p className="text-cyan-400 mb-2">
                  October 2022 - June 2023
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  Research Officer, NPOL (under contract with M/S Lama enterprises)
                </h3>

                <p className="text-slate-300 leading-8">

                  Oceanoraphic data collection and processing onboard research vessel INS Sagardhwani, including deployment and retrieval of oceanographic instruments, and ensuring data quality control.
                  Assisted in the analysis and interpretation of oceanographic data, contributing to research projects focused on understanding ocean dynamics and variability in the Indian Ocean region.

                </p>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">

                <p className="text-cyan-400 mb-2">
                  April 2019 - February 2021
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  Supervisor, Vision Plus Security Control Private Limited
                </h3>

                <p className="text-slate-300 leading-8">

                  Tax consultation, Floor supervision, and Customer service management,
                  agent supervision, and product training for tax relation agents, quality control of the service calls,
                  attending transfer calls from customers.

                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="py-32 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold text-cyan-400 mb-20">
            Education
          </h2>

          <div className="border-l border-cyan-500 pl-10 space-y-16">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">

                <p className="text-cyan-400 mb-2">
                  2020 - 2022
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  M.Sc. in Oceanography, Cochin University of Science and Technology
                </h3>

                <p className="text-slate-300 leading-8">

                  Dissertation - Tsunami in the Pacific Ocean caused by the Tonga Volcanic Eruption in January 2022.

                </p>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl">

                <p className="text-cyan-400 mb-2">
                  2012 - 2015
                </p>

                <h3 className="text-2xl font-bold mb-4">
                  B.Sc. in Physics, Mahatma Gandhi University, Kerala
                </h3>

                <p className="text-slate-300 leading-8">

                    

                </p>

              </div>

            </motion.div>

          </div>

        </div>   


      </section>

      {/* PUBLICATIONS */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-cyan-400 mb-20">
            Publications
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div
  whileHover={{ y: -10 }}
  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
>

  <p className="text-cyan-400 text-sm mb-3">
    Journal Article • 2024
  </p>

  <h3 className="text-2xl font-bold mb-4 leading-snug">
    Volcanic Eruption Triggers a Rare Meteotsunami in the Indian Ocean
  </h3>

  <p className="text-slate-300 leading-8 mb-6">

    Published in Geophysical Research Letters.
    Research focused on Meteotsunami 
    

  </p>

  {/* DOI BUTTON */}
  <a
    href="https://doi.org/10.1029/2023GL108036"
    target="_blank"
    rel="noreferrer"
    className="inline-block px-5 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-500 hover:text-black transition no-underline text-white"
  >
    View DOI
  </a>

</motion.div>

            

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 text-center">

        <h2 className="text-5xl font-bold text-cyan-400">
          Contact
        </h2>

        <p className="mt-8 text-slate-300 text-lg">
          arjunksabu@gmail.com | +91 9037444198
        </p>

        <p className="mt-4 text-slate-300">
          @2026 Arjun K Sabu
        </p>

      </section>

    </div>
  )
}

export default App