const AboutUsContent = () => {
    return (
        <div>
        <div className="flex flex-col">
            <div className="h-[62px] w-[515px] relative top-10  shrink-0 self-center max-w-full bg-white rounded-xl border border-black border-solid">
                <p className="text-center font-oswalds text-4xl relative top-2">About Us</p>
            </div>
        </div>
        <div className="flex flex-col relative top-20">
      <div className="flex gap-5 justify-between w-full text-5xl leading-[72px] text-red-950 max-md:flex-wrap max-md:max-w-full max-md:text-4xl relative left-10">
        <div className="justify-center items-center px-16 py-1.5 bg-white border border-black border-solid max-md:px-5 max-md:max-w-full max-md:text-4xl">
          {" "}
          Mission Statement
        </div>
        <div className="justify-center items-center py-1.5 pr-16 pl-20 -ml-0.5 bg-white border border-black border-solid max-md:px-5 max-md:max-w-full max-md:text-4xl relative right-20 flex item-center">
          Our Motivations
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-12 w-full text-2xl leading-9 text-center text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full ">
        <div className="overflow-hidden relative flex-col justify-center self-start px-6 pt-32 pb-20 border border-black border-solid fill-white max-w-[614px] min-h-[424px] stroke-[1px] stroke-black max-md:px-5 max-md:pt-10 max-md:max-w-full">
        <div className="relative bottom-5">
          At One Health our mission is to bridge the healthcare gap by providing
          accessible preliminary diagnosis's to individuals in rural or
          underserved communities worldwide. Through our technology we provide
          people with the knowledge to make preliminary diagnosis’s based on
          several factors before consulting a doctor.{" "}
          </div>
        </div>
        <div className="justify-center px-4 pt-28 pb-20 bg-white border border-black border-solid max-md:max-w-full">
          We started this project because we are passionate about the
          Sustainable Development Goals set out by the United Nations in order to improve
          the world. We choose heath specifically because we know that there{" "}
          are many communities around the world that little to no access to
          healthcare.{" "}
        </div>
      </div>
    </div>
        </div>
        
    )
}

export default AboutUsContent;