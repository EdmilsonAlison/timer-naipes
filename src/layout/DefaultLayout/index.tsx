import {Header} from "../../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import {LayoutContainer} from "./styles.ts";

export const Index = () => {
    return (
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    );
};