import kitchenFlambe from "@/assets/about-resto.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          ref={textRef}
          className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Notre Histoire
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8 leading-snug">
            La finesse de la cuisine japonaise
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              Au cœur de Dijon, au 45 Rue Jean Jacques Rousseau, le Torikara San vous ouvre ses portes. Dès que vous franchissez le seuil, une douce chaleur et un parfum envoûtant de plats fraîchement préparés vous enveloppent. Ici, la cuisine japonaise prend tout son sens, avec un karaage croustillant à l'extérieur, juteux à l'intérieur, préparé avec une dévotion sans faille. Chaque plat est le fruit d'une sélection rigoureuse d'ingrédients et d'un savoir-faire transmis avec passion. L'ambiance y est conviviale, un joyeux mélange de rires et de conversations animées, où chaque visite se transforme en un moment de partage authentique. C'est la passion du goût et du bien-être qui anime chaque geste, une invitation à un voyage culinaire sincère et mémorable.
            </p>
          </div>
        </div>
        <div
          ref={imgRef}
          className={`relative transition-all duration-1000 delay-200 ${imgVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <div className="overflow-hidden group">
            <img
              src={kitchenFlambe}
              alt="Notre cuisine"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={500}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
