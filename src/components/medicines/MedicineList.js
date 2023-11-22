import { useContext } from "react";

import Card from "../UI/Card";
import MedicineContext from "../contexts/medicine-context";
import MedicineItem from "./MedicineItem";

const MedicineList = (props) => {
  const medicineCtx = useContext(MedicineContext);

  console.log(medicineCtx.medicines);
  return (
    <Card>
      <h5>List of Products</h5>
      <ul>
        {medicineCtx.medicines.map((item) => (
          <MedicineItem items={item} />
        ))}
      </ul>
    </Card>
  );
};

export default MedicineList;
