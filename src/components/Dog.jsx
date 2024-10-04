import { useState } from "react";

const Dog = () => {
  const [dog, setDog] = useState({ name: "Chihuahua", year: 4 });

  const HandleClick = () => {
    //setDog({ ...dog, year: dog.year + 1 });
    setDog((prev) => ({ ...prev, year: dog.year + 1 }));
  };
  return (
    <>
      <h4>
        {dog.name} - {dog.year}
      </h4>
      <button className="btn btn-dark mb-5" onClick={HandleClick}>
        Update Year
      </button>
    </>
  );
};

export default Dog;
