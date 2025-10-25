import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="border-t border-[#C0B7E8]/10 bg-[#302C42] mt-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-[#B1B1B1] sm:text-left">
            &copy; {currentYear} TicketWave. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <motion.a
              href="#"
              className="text-[#B1B1B1] transition-colors hover:text-[#C0B7E8]"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-[#B1B1B1] transition-colors hover:text-[#C0B7E8]"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-[#B1B1B1] transition-colors hover:text-[#C0B7E8]"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Support
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
