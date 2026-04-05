import { TheCategory } from "./_components/theCategory";
import Navbar from "./_components/theNavigation";
const Main = async () => {
  return (
    <div>
      <Navbar />
      <img
        className="w-full object-cover aspect-48/19"
        src="/hero-image/hero-image.png"
        alt="hero img"
      />
      <TheCategory />
    </div>
  );
};

export default Main;
