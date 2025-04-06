import PropTypes from "prop-types";
import { IconList } from "../IconList/IconList";

function SocialMedia() {
    const icons = GetSocialMediaIcons();

    return <IconList icons={icons} />
}

function GetSocialMediaIcons(){
    return [
        {
            title: "Linked In",
            url: "https://www.linkedin.com/in/mario-soto-moreno-547186189",
            icon_url: "/images/technologies/dark/linkedin.png"
        },
        {
            title: "Github",
            url: "https://github.com/MatProgrammerSM",
            icon_url: "/images/technologies/dark/github.png"
        },
        {
            title: "Discord",
            url: "https://discord.gg/",
            icon_url: "/images/technologies/dark/discord.png"
        },
        {
            title: "Gmail",
            url: "mailto:mariosotomor.dev@gmail.com",
            icon_url: "/images/technologies/dark/mail.png"
        }
    ];
}

SocialMedia.propTypes = {
    color: !PropTypes.string.isRequired
}

export default SocialMedia;