import ImgSofia from '../../assets/sofia_lorenzo.jpg';
import WorldIcon from '../../icons/WorldIcon';

function Hero() {
  return (
    <section className="h-screen flex justify-center items-center" id="Hero">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 px-6 mx-auto max-w-7xl">
        <div className="text-center md:text-left mr-32">
          <h1 className="font-bold text-3xl md:text-5xl pb-4" style={{ color: "var(--headingOne-color)"}}>Sofía Lorenzo</h1>
          <p className="pb-2 font-medium text-lg md:text-lx" style={{ color: "var(--headingTwo-color)"}}>Desarrolladora Frontend | Diseñadora UX/UI</p>
          <span className="flex items-center justify-center md:justify-start font-normal" style={{ color: "var(--span-color)"}}>
            <WorldIcon />
            Buenos Aires, Argentina
          </span>
        </div>
        <figure className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img src={ImgSofia} alt="Sofía Lorenzo" className="rounded-full object-cover border-4" style={{ borderColor: "var(--border-color)"}} />
        </figure>
      </div>
    </section>
  );
}

export default Hero;