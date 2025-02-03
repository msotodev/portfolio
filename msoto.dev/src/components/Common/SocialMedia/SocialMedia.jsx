import PropTypes from "prop-types";
import { IconList } from "../IconList/IconList";
import { GetIconUri } from "../../../helpers/IconHelper";

function SocialMedia(
    {color = "2e0427"}
) {
    const icons = GetSocialMediaIcons(color);

    return <IconList icons={icons} />
}

function GetSocialMediaIcons(color){
    return [
        {
            title: "Linked In",
            url: "https://www.linkedin.com/in/mario-soto-moreno-547186189",
            icon_url: GetIconUri("8808", color)
        },
        {
            title: "Github",
            url: "https://github.com/MatProgrammerSM",
            icon_url: GetIconUri("12599", color)
        },
        {
            title: "Discord",
            url: "",
            icon_url: GetIconUri("30888", color)
        },
        {
            title: "Gmail",
            url: "mailto:mariosotomor.dev@gmail.com",
            icon_url: GetIconUri("Y2GfpkgYNp42", color)
        }
    ];
}

SocialMedia.propTypes = {
    color: !PropTypes.string.isRequired
}

export default SocialMedia;