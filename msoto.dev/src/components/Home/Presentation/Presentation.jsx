import SocialMedia from "../../Common/SocialMedia/SocialMedia";

export default function Presentation() {
    return (
        <section className="flex flex-col gap-[25px] items-center">
            <article className="flex flex-col gap-[35px] sm:flex-row">
                <div className="flex justify-center align-middle">
                    <img className="w-50 rounded-full" src="/images/Presentation/programmer.png" alt="Avatar" />
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col gap-[10px] text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-[var(--primary-color)]">Mario Soto Moreno</h1>
                        <h2 className="text-[var(--primary-color)] pl-[0px]">System Computationals Engineer</h2>
                        <SocialMedia />
                    </div>
                </div>
            </article>
            <article>
                <p className="text-center text-[var(--primary-color)]">
                    Senior .NET Developer with over 5 years of experience in mobile app creation, APIs and web apps. 
                    I specialize in designing and creating projects from scratch, implementing coding best practices, 
                    through good architecture to deliver scalable, efficient solutions built with cutting-edge technology.
                </p>
            </article>
        </section>
    )
}