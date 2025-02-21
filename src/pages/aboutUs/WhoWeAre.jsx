import Button from "../../components/Button";

const WhoWeAre = () => {
  return (
    <div className="my-12 w-[90%] mx-auto">
      <div className="">
        <h2 className="text-[#1ABC9C] text-2xl mb-3">Who We Are</h2>
        <div className="w-[80px] h-[2px] mb-6 bg-[#1ABC9C]"></div>
      </div>
      <div className="md:flex">
        <div className="md:w-[50%]">
          <img
            className=""
            src="https://i.postimg.cc/grFv3ZqN/team-doctors.jpg"
            alt="team"
          />
        </div>
        <div className="md:w-[50%] bg-[#FFFAF9] border-b-2 border-[#FD9678]">
          <div className="p-8">
            <h2 className="text-[#1ABC9C] text-2xl mb-2">
              Praesent massa orci, condimen vitae mattis quis, imperdiet non
              massa.
            </h2>
            <p className="pb-3">
              Lorem ipsum dolor sit amet, consectetur ag elit. Proin ipsum
              augue, rhoncus ac arcu ut, auclum est. AEtiam ligula orci, condim
              at turpis sed.Ppulvinar, poserat vitae, ultrices quis semper nisi
              porttitor. Aenean vel libero at nulla pulvinar placerat mauris
              Phasellus..
            </p>
            <Button buttonText={'Read More'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
