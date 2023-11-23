import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "./redux/catalogOperations";
import { selectCatalog, selectIsLoading } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);

  const handleOnClick = () => {
    dispatch(fetchAllCars());
  };

  return (
    <div>
      <p>CarForRent</p>
      {isLoading && <p>Loading ...</p>}
      <ul>
        {cars?.map((car) => (
          <li key={car.id}>
            {car.make} + {car.model}
          </li>
        ))}
      </ul>
      <button onClick={handleOnClick}>show All Cars</button>
    </div>
  );
}

export default App;
