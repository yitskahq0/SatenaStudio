export default function Ads1() {
     return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">

      
      {/* Background Photo */}
      <img 
        src="/value.jpg" 
        alt="Company Background" 
        className="w-full h-full object-cover"
      />

      {/* Text in the CENTER */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[#93bda9] text-3xl sm:text-4xl md:text-5xl font-lora font-bold drop-shadow-lg">
        WHEN WE
        BUILD
        LET US THINK
        THAT WE
        BUILD FOR
        EVERYONE                                            
        </h1>
      </div>

    </div>
  );
};