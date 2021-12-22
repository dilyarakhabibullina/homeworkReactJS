import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTS } from "../../Router/constants";

export const PublicRouter = ({ auth, ...rest }) => {
  console.log(rest);
  return !auth ? <Route {...rest} /> : <Redirect to={ROUTS.PROFILE} />;
};
