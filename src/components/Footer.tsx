const Footer = () => {
  return (
    <footer className="bg-black border-t-8 border-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-yellow via-neon-cyan via-section-pink to-neon-green"></div>
      <div className="container mx-auto px-6">
        <div className="text-center text-white">
          <p className="font-display font-black text-lg mb-2 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.3)]">
            © {new Date().getFullYear()} Nakul Prajapati. All rights reserved.
          </p>
          <p className="text-base font-bold text-neon-cyan mt-2">
            Built with passion and dedication ⚡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
