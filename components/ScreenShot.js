import Image from "next/image";

const ScreenShot = () => {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="capitalize font-bold text-2xl p-4 ">travel photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full  md:col-span-3 md:row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="#"
            layout="responsive"
            width="677"
            height="451"
            className="normal-img-sean"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="#"
            layout="responsive"
            width="215"
            height="217"
            className="normal-img-sean"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="#"
            layout="responsive"
            width="215"
            className="normal-img-sean"
            height="217"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="#"
            layout="responsive"
            width="215"
            className="normal-img-sean"
            height="217"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="#"
            layout="responsive"
            width="215"
            className="normal-img-sean"
            height="217"
          />
        </div>
      </div>
    </div>
  );
};

export default ScreenShot;
