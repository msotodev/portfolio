import PropTypes from "prop-types";

function ExperienceItem(
    {title, companyName, date, description}
) {
    return (
        <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
            <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                    <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span>

                    <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
                    <h4 className="font-semibold text-xl text-gray">{companyName}</h4>
                    <time className="p-0 m-0 text-sm text-[var(--primary-text-color)]">{date}</time>
                </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-[var(--primary-text-color)] md:col-span-3">
                {description}
            </div>
        </div>
    );
}

ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired, 
    companyName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ExperienceItem;