import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import "./Dogs.css";
import { getDogActionWithThunk } from "../../Store/Dog/actions";
import { useSelector, useDispatch } from "react-redux";
import { dogSelector } from "../../Store/Dog/selectors";

export const Dogs = () => {
  // const [dog, setDog] = useState(undefined);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  const { loading, error, dogUrl } = useSelector(dogSelector);
  const dispatch = useDispatch();

  const handleGetDogs = async () => {
    dispatch(getDogActionWithThunk());
  };

  useEffect(() => {
    dispatch(getDogActionWithThunk());
    //  handleGetDogs();
  }, []);

  if (loading) {
    return (
      <div className="circularProgress">
        <CircularProgress />;
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>error</div>
        <button onClick={handleGetDogs}>Refresh page</button>
      </div>
    );
  }

  return <img src={dogUrl} alt="dogs"></img>;
};
