import slider3 from "../../../assets/slider3.jpg";
import Typewriter from "typewriter-effect";
import Container from "../../Container/Container";

const Slider3 = () => {
  return (
    <div
      className="relative w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${slider3})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/20"></div>

      <div className="absolute inset-0 grid place-items-center">
        <Container>
          <h2 className="text-4xl sm:text-6xl text-white/90 font-bold">
            <Typewriter
              options={{
                strings: [
                  "WelCome to <span class='text-primary'>Rent Wheels</span> <br class='hidden lg:block'>Drive your dreams,  <br class='hidden lg:block'> explore new roads.",
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

export default Slider3;
