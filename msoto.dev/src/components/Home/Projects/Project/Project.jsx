import PropTypes from "prop-types";
import { IconList } from "../../../Common/IconList/IconList";

function Project(
    {title, subtitle, description, image, tools}
){
    return (
        <article className="flex flex-col gap-[20px] p-[25px] rounded-[10px] bg-[var(--primary-color)] sm:flex-row">
            <div className="flex flex-col gap-[15px] items-center text-center">
                <h3 className="text-2xl font-bold">
                    {title} - <small className="font-light">{subtitle}</small>
                </h3>
                <p>{description}</p>

                <IconList icons={tools} />
            </div>
            <div>
                <div className="flex justify-center items-center bg-[#e2e2e223]">
                    <img src={image} alt="" />
                </div>
            </div>
        </article>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired
};

export default Project;