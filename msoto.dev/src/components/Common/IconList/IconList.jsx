import PropTypes from "prop-types";

export function IconList(
    { icons }
) {
    return (
        <ul className="flex justify-center sm:justify-start gap-[15px]">
            {icons.map(icon => (
                <li key={icon.url}>
                    <IconListItem key={icon.url} 
                                  url={icon.url}
                                  icon_url={icon.icon_url}
                                  title={icon.title} />
                </li>
            ))}
        </ul>
    )
}

export function IconListItem(
    {url, icon_url, title}
) {
    const isLink = url !== undefined && url !== "";

    return isLink ? (
        <a href={url} target="_blank" title={title}>
            <img src={icon_url} alt={title}></img>
        </a>
    ) : (
        <a title={title}>
            <img src={icon_url} alt={title}></img>
        </a>
    )
}

IconList.propTypes = {
    icons: PropTypes.array.isRequired
}

IconListItem.propTypes = {
    url: !PropTypes.string.isRequired,
    icon_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}