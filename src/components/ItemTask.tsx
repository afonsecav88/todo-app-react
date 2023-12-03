export const ItemTask = ({ item }) => {
  return (
    <>
      {item.description}
      <button className="bnt btn alert-danger">Eliminar</button>
    </>
  );
};
