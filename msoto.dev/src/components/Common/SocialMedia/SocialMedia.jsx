import PropTypes from "prop-types";
import { IconList } from "../IconList/IconList";
import { GetSocialMediaIcons } from "../../../services/SocialMediaService";

function SocialMedia() {
    const icons = GetSocialMediaIcons();

    return <IconList icons={icons} />
}

SocialMedia.propTypes = {
    color: !PropTypes.string.isRequired
}

export default SocialMedia;