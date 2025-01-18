import ImgSofia from '../../assets/sofia_lorenzo.jpg';
import WorldIcon from '../../icons/WorldIcon';

function Hero() {
  return (
    <section className="w-screen h-screen flex justify-center items-center" id="Hero">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-8 px-4 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl pb-4">Sofía Lorenzo</h1>
          <p className="pb-2 font-medium text-lg md:text-lx">Desarrolladora Frontend | Diseñadora UX/UI</p>
          <span className="flex items-center justify-center md:justify-start font-normal text-gray-600">
            <WorldIcon />
            Buenos Aires, Argentina
          </span>
        </div>
        <figure className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
          <img src={ImgSofia} alt="Sofía Lorenzo" className="rounded-full object-cover border-4 border-gray-500" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;