const Hero = ({ message, heading }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-10rem] sm:text-left text-center">
        <h2 className="text-5xl font-bold uppercase">{heading}</h2>
        <p className="py-5 text-xl capitalize">{message}</p>
        <button className="px-8 py-2 border capitalize">book</button>
      </div>
    </div>
  );
};

export default Hero;
