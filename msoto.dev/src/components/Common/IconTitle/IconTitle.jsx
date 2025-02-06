import PropTypes from "prop-types";

function IconTitle(
    {icon, title, isCenter = true, isBold = true, url = ""}
){
    let classNameDiv = "flex gap-[10px]";
    const id = title.replace(" ", "");

    if (isCenter) classNameDiv += " justify-center items-center";

    return (
        <div id={id} className={classNameDiv}>
            <img src={icon} alt={title} />
            <TitleLink title={title} url={url} isBold={isBold} />
        </div>
    )
}

function TitleLink({title, url, isBold}) {
    const isLink = url !== undefined && url !== "";
    let className = "text-2xl text-center text-[var(--primary-color)]";

    if (isBold) className += " font-bold";

    return isLink ? (
        <a className={className} href={url} target="_blank" title={title}>{title}</a>
    ) : (
        <a className={className} title={title}>{title}</a>
    )
}

IconTitle.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCenter: !PropTypes.bool.isRequired,
    isBold: !PropTypes.bool.isRequired,
    url: !PropTypes.string.isRequired
}

TitleLink.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isBold: PropTypes.bool.isRequired
}

export default IconTitle;