import FormSubmission from './FormSubmission';
import ImageComponent from './ImageComponent';

const MainContent = () => {
  return (
    <div className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full ">
      <div className="self-center font-oswalds text-9xl leading-[108px] text-red-950 max-md:text-4xl relative bottom-10">
        Health. Made. Simple.
      </div>
      <div className="flex z-10 gap-2 self-center mt- w-full font-medium leading-[150%] max-w-[1055px] max-md:flex-wrap max-md:max-w-full space-y-2 relative top-10">
        <FormSubmission />
       
      </div>
      <ImageComponent />
    </div>
  );
};

export default MainContent;