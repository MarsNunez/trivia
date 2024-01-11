const GetName = ({ setName, setShowNameComponent }) => {
  return (
    <section className="screen flex items-center justify-center flex-col text-xl">
      <div className="flex flex-col items-center">
        <label htmlFor="name" className="font-bold">
          Nombre:
        </label>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre aquí"
          className="border rounded-md px-2 outline-none text-center mt-2"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="rounded-md text-yellow-500 bg-red-600 px-7 mt-5"
          onClick={() => setShowNameComponent(false)}
        >
          Empezar!
        </button>
      </div>
    </section>
  );
};

export default GetName;
