import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Root from "../components/Root.tsx"
import HomePage from "../features/home/";
import NotFound from "../components/NotFound.tsx";
import UploadPage from "../features/upload";

const BasicDataRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" Component={Root}>
                <Route path="/" Component={HomePage} />
                <Route path="/upload" Component={UploadPage} />
                <Route path="*" Component={NotFound} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default BasicDataRouter;