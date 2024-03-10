import Home from "../Pages/Home";
import SignupPage from "../Pages/Signup";
import LoginPage from "../Pages/Login"
import CreatePage from "../Pages/Create"
import ViewPage from "../Pages/ViewPost"
import Counter from "../Components/sample1";
import ShowDemo from "../Components/showSample";

export const routes = [
    { path: "/", element: Home },
    { path: "/signup", element: SignupPage },
    { path: "/login", element: LoginPage },
    { path: "/create", element: CreatePage },
    { path: "/view", element: ViewPage },
    { path: "/sample", element: Counter },
    { path: "/show", element: ShowDemo },
]