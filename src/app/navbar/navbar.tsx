import "./navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import Button from "@/app/navbar/button";

export default function Navbar() {
    return (
        <>
            <nav>
                <Button href="https://discord.gg/5pjP2DxQK8" target={"_blank"}>
                    <FontAwesomeIcon icon={faDiscord} />
                    Discord
                </Button>
                <Button href="https://github.com/JGJ52/" target={"_blank"}>
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                </Button>
            </nav>
        </>
    )
}