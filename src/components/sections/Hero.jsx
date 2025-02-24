import ImgSofia from "../../assets/Sofia_Lorenzo.png";
import WorldIcon from "../../icons/WorldIcon";
import Contact from "./Contact";

function Hero() {
  return (
    <section
  className="relative h-screen flex flex-col justify-center items-center px-4 sm:px-8"
  id="Hero"
>
  <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-20 max-w-4xl mx-auto">
    <div className="text-center md:text-left">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl pb-2" style={{ color: "var(--headingOne-color)" }}>
        Sofía Lorenzo
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium pb-3" style={{ color: "var(--headingTwo-color)" }}>
        Desarrolladora Frontend | Diseñadora UX/UI
      </p>
      <span className="flex items-center justify-center md:justify-start text-sm sm:text-base font-normal" style={{ color: "var(--span-color)" }}>
        <WorldIcon className="w-5 h-5 mr-2" />
        Buenos Aires, Argentina
      </span>

      <div className="flex justify-center md:justify-start mt-2">
    <Contact />
      </div>
    </div>

    <figure className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 flex-shrink-0 rounded-full">
      <img src={ImgSofia} alt="Sofía Lorenzo" className="rounded-full object-cover border-4 w-60" style={{ borderColor: "var(--border-color)" }} />
    </figure>
  </div>
</section>
  );
}

export default Hero;
