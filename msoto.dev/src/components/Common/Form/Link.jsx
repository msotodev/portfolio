import PropTypes from "prop-types";

export default function Link(
    { text, href, image }
) {
    return (
        <a href={href} className="flex justify-center gap-[10px] cursor-pointer max-sm:w-100 px-[25px] py-[10px] rounded-[10px] text-center bg-[var(--primary-color)] hover:bg-[var(--primary-dark-color)]">
            <img src={image} className="w-6" />
            {text}
        </a>
    );
}


Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: !PropTypes.string.isRequired
}