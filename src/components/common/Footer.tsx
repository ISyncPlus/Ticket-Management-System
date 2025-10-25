export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C0B7E8]/10 bg-[#302C42] mt-auto">
      <div className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-[#B1B1B1] sm:text-left">
            &copy; {currentYear} TicketWave. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-[#B1B1B1] transition-colors hover:text-[#C0B7E8]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#B1B1B1] transition-colors hover:text-[#C0B7E8]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#B1B1B1] transition-colors hover:text-[#C0B7E8]"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
