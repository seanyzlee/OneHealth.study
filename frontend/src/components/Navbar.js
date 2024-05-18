import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex float-right gap-5 justify-between self-start mt-3.5">
      <div className="justify-center whitespace-nowrap"><Link to ='/home'>Home</Link></div>
      <div className="my-auto"><Link to= '/aboutus'>About Us</Link></div>


    </div>
  );
};

export default Navbar