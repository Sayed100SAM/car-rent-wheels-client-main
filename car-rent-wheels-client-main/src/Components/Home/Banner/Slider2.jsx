import slider2 from "../../../assets/slider2.jpg";
import Typewriter from "typewriter-effect";
import Container from "../../Container/Container";

const Slider2 = () => {
  return (
    <div
      className="relative w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${slider2})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30"></div>

      <div className="absolute inset-0 grid place-items-center">
        <Container>
          <h2 className="text-4xl sm:text-6xl text-white/90 font-bold">
            <Typewriter
              options={{
                strings: [
                  "WelCome to <span class='text-primary'>Rent Wheels</span> <br class='hidden lg:block'> We connect you to reliable, <br class='hidden lg:block'> comfortable cars",
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

export default Slider2;
