import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutAsync } from "../authSlice";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const [loggingOut, setLoggingOut] = useState(false); // Adding state to track the logout process

  // useEffect(() => {
  //  if (user && !loggingOut) {
  //       setLoggingOut(true);
  //       dispatch(signOutAsync()).finally(() => {
  //          setLoggingOut(false); // Reset after logout is complete
  //       });
  //    }
  // }, [dispatch, user, loggingOut]);  //  debug code not working
  useEffect(() => {
    dispatch(signOutAsync());
  }, [dispatch]); //normal code.

  // Only navigate if the user is null (after logout)

  return (
    <>
      {" "}
      {!user && (
        <Navigate to="/login" replace={true}>
          {" "}
        </Navigate>
      )}
    </>
  );
}

export default Logout;
