const TestimonialSlide = ({ first }) => {
  console.log(first);
  return (
    <div>
      <div className="bg-[#faf4f2] p-[30px] rounded-2xl"
      style={{boxShadow: '0 0 1px gray'}}
      >
        <div>
          <p className="text-sm">{first.review_text}</p>

          <div className="flex items-center gap-3 my-6">
            <div className="h-10 w-10 rounded-full overflow-hidden p-1 border border-blue-200">
                <img
                  src={first.userImage}
                  className="object-cover w-full h-full rounded-full"
                  alt="image" 
                />
            </div>
            <div>
              <h1 className="font-semibold">{first.name}</h1>
              <p className="font-semibold text-sm text-gray-500">
                @{first.username}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;