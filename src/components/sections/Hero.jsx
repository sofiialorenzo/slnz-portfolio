import ImgSofia from "../../assets/sofia_lorenzo.jpg";
import WorldIcon from "../../icons/WorldIcon";
import Contact from "./Contact";

function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:flex-row"
      id="Hero"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 md:gap-20 max-w-4xl mx-auto">
        <div className="text-center md:text-left">
          <h1
            className="font-bold text-2xl sm:text-3xl md:text-5xl pb-2"
            style={{ color: "var(--headingOne-color)" }}
          >
            Sofía Lorenzo
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-medium pb-3"
            style={{ color: "var(--headingTwo-color)" }}
          >
            Desarrolladora Frontend | Diseñadora UX/UI
          </p>
          <span
            className="flex items-center justify-center md:justify-start text-sm sm:text-base font-normal"
            style={{ color: "var(--span-color)" }}
          >
            <WorldIcon className="w-5 h-5 mr-2" />
            Buenos Aires, Argentina
          </span>
        </div>

        <figure className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 flex-shrink-0">
          <img
            src={ImgSofia}
            alt="Sofía Lorenzo"
            className="rounded-full object-cover border-4"
            style={{ borderColor: "var(--border-color)" }}
          />
        </figure>
      </div>

      <div className="block md:hidden mt-4">
        <Contact />
      </div>
    </section>
  );
}

export default Hero;
