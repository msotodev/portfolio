import PropTypes from "prop-types";
import { IconList } from '../../Common/IconList/IconList';

function TechnicalSkill(
    { title, skills }
) {
    return (
        <article className='flex flex-col gap-[25px]'>
            <h3 className="text-2xl text-center font-semibold text-[var(--primary-text-color)]">
                {title}
            </h3>
            <div className='flex justify-center items-center'>
                <IconList icons={skills} />
            </div>
        </article>
    );
}

TechnicalSkill.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
};

export default TechnicalSkill;