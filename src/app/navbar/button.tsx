import "./navbar.css";
import {ReactNode} from "react";

type button = {
    onClick?: () => void,
    href?: string,
    target?: string,
    children: ReactNode,
}

export default function Button({onClick, href, target, children}: button) {
    if (href) {
        return (
            <>
                <a href={href} onClick={onClick} target={target} className={"nav-button"}>
                    {children}
                </a>
            </>
        )
    }

    return (
        <>
            <button onClick={onClick} className={"nav-button"}>
                {children}
            </button>
        </>
    )
}