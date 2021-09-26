import { Redirect, Route } from "react-router";
import { isLogged } from "../../utils/auth";

export const PrivateRoute = (props: any) => isLogged()
    ?
    <Route { ...props} />
    : <Redirect to="/login"></Redirect>