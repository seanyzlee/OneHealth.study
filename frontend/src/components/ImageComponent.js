import React from 'react';

const ImageComponent = () => {
  return (
    <div className="flex flex-col justify-center py-14 ml-9 bg-white max-md:max-w-full w-100 relative top-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2abbcbd1b5922ec206feab03f74463188a739f688832c119c80ef52ef721d2e?"
        className="w-full border-solid aspect-[6.67] border-[14px] border-red-950 stroke-[14px] stroke-red-950 max-md:max-w-full"
        alt="Health Image"
      />
    </div>
  );
};

export default ImageComponent