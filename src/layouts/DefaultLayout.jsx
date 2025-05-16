import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import LoaderContext from "../context/LoaderContext.jsx";
import Loader from "../components/Loader";


function DefaultLayout() {

    const { loading } = useContext(LoaderContext);

    return <>
        <Header />
        <main>
            <Outlet />
            {loading && <Loader />}
        </main>

    </>
}

export default DefaultLayout;