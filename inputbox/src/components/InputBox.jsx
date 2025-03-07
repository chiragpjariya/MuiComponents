const InputBox = () => {
  return (
    <div className="w-[680px]">
      <div className="relative w-full">
        <input
          type="text"
          required
          className="peer absolute w-full text-aliceblue outline-none text-[2.2rem] px-[30px] leading-[80px] 
      z-50 text-white
      rounded-[10px] border-[2px] border-[#f0ffff] bg-transparent transition-all ease-in duration-200 focus:z-20"
        />

        {/* Floating label */}
        <div className="absolute px-[30px]  py-[14px] text-[2.2rem] duration-[0.5s] text-white 
      peer-focus:-translate-y-11 peer-focus:z-50 peer-focus:px-6 peer-focus:bg-transparent 
      peer-focus:scale-[0.88] peer-focus:-translate-x-1 peer-focus:bg-blue-950 peer-focus:text-[1.8rem]">
          Enter Your Name
        </div>
      </div>


    </div>
  );
};

export default InputBox;
