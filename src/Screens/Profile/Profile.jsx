import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../Store/Profile/actions";
import "./Profile.css";

export const Profile = () => {
  const dispatch1 = useDispatch();
  const { name1, isChecked } = useSelector((state1) => state1);

  const handleCheckbox = () => {
    dispatch1(toggleCheckbox());

    console.log({ isChecked });
  };

  return (
    <>
      <h1>Это страница профиля</h1>

      <div>
        <input type="checkbox" onClick={handleCheckbox} />

        {isChecked && name1}
      </div>
    </>
  );
};
