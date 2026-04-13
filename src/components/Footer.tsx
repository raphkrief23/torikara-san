const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Torikara San</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          45 Rue Jean Jacques Rousseau, 21000 Dijon
        </p>
        <a href="tel:+33380417979" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 3 80 41 79 79
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Torikara San. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
