import Navbar from "../components/Navbar";
import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-11 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1170px] max-md:max-w-full">
        <Navbar />
        <MainContent/>
      </div>
    </div>
  );
};

export default Home;