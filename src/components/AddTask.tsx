export const AddTask = () => {
  return (
    <>
      <form action="" className="mt-3">
        <label className="mb-2" htmlFor="">
          Insertar tarea:
        </label>
        <br />
        <input className="form-control mb-2" type="text" />
        <button
          className="mb-2 btn btn-primary btn-sm display-6 "
          type="submit"
        >
          Agregar Tarea
        </button>
      </form>
    </>
  );
};
