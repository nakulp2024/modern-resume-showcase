const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display font-bold text-2xl mb-2">Nakul Prajapati</p>
          <p className="text-background/70 mb-4">Customer Success Manager</p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-4" />
          <p className="text-background/60 text-sm">
            © {currentYear} Nakul Prajapati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
