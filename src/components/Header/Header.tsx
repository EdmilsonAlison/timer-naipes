import {CoffeeIcon, HeaderContainer} from "./styles.ts";
import {Scroll, Timer} from "phosphor-react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <HeaderContainer>
            <span>
                <CoffeeIcon size={24} alt={"coffee"}/>
            </span>
            <nav>
                <NavLink to="/" title={"Timer"}>
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title={"History"}>
                    <Scroll size={24}/>
                </NavLink>

            </nav>
        </HeaderContainer>
    );
};