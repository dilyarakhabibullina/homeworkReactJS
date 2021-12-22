import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTS } from "../../Router/constants";

export const PrivateRouter = ({ auth, ...rest }) =>
  auth ? <Route {...rest} /> : <Redirect to={ROUTS.SIGN_IN} />;
