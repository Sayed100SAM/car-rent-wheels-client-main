import slider1 from "../../../assets/slider1.jpg";
import Typewriter from "typewriter-effect";
import Container from "../../Container/Container";

const Slider1 = () => {
  return (
    <div
      className="relative w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${slider1})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30"></div>

      <div className="absolute inset-0 grid place-items-center">
        <Container>
          <h2 className="text-4xl sm:text-6xl text-white/90 font-bold">
            <Typewriter
              options={{
                strings: [
                  "WelCome to <span class='text-primary'>Rent Wheels</span> <br class='hidden lg:block'> where every ride begins <br class='hidden lg:block'> with freedom!",
                ],
                autoStart: true,
                loop: true,
                html: true,
              }}
            />
          </h2>
        </Container>
      </div>
    </div>
  );
};

export default Slider1;
