import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div className="flex justify-center items-center px-16 py-20 text-8xl bg-white leading-[135px] text-red-950 max-md:px-5 max-md:text-4xl">
            <div className="flex flex-col mt-1 w-full max-w-[1136px] max-md:max-w-full max-md:text-4xl w-90">
                <div className="justify-center items-center self-center px-0 py-5.5 max-w-full whitespace-nowrap bg-white border border-black border-solid w-[818px] max-md:px-5 max-md:text-4xl">
                    <div className="relative left-1/4">
                        Disclaimer
                    </div>
                </div>
                <div className="justify-center px-5 pt-12 pb-28 mt-32 bg-white border border-black border-solid leading-[135px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                    <span className="text-red-950">Use at your own risk: </span>
                    <span className="text-3xl text-red-950">
                        The information and services provided by One Health are intended for
                        general informational purposes only and are not a substitute for
                        professional medical advice, diagnosis, or treatment. Always seek
                        the advice of your physician or other qualified health providers
                        with any questions you may have regarding a medical condition.
                    </span>
                    <br />
                </div>
                <div className="flex gap-5 justify-between mt-32 text-6xl text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    <div className="items-center px-16 pt-6 pb-3.5 bg-white border border-black border-solid max-md:px-5 max-md:text-4xl">
                        <button>
                            <Link to='/home'>Accept</Link>

                        </button>

                    </div>
                    <div className="items-center px-16 pt-6 pb-3.5 bg-white border border-black border-solid max-md:px-5 max-md:text-4xl">
                        <button>
                            <Link to='/rejected'>Reject</Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;