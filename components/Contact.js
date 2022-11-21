const Contact = () => {
  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="font-bold text-2xl capitalize p-4 text-center">
        let us work together
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-3"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full h-60"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 capitalize">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
