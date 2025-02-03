export default function Toolbar(){
    return (
        <section className="flex justify-between">
            <button>
                <img src="https://img.icons8.com/?size=40&id=22439&format=png&color=000000" alt="Mexico Flag" />
            </button>

            <label className="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-[var(--light-gray)] rounded-full peer dark:bg-[var(--light-gray)] border peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-[var(--primary-color)]"></div>
                <span className="ms-3 text-sm font-medium text-[var(--primary-color)]"></span>
            </label>
        </section>
    )
}