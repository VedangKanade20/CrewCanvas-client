const Footer = () => {
    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; Crew Canvas 2025 UI All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

//toi be not coinsiderded
<div className="mt-6 sm:mt-0">
    <ul className="flex items-center space-x-4">
        {/* Social Icons */}
        {/* Twitter */}
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
            <a href="#">
                <svg
                    className="svg-icon w-6 h-6 text-blue-400"
                    viewBox="0 0 20 20"
                >
                    <path fill="none" d="..." />
                </svg>
            </a>
        </li>

        {/* Facebook */}
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
            <a href="#">
                <svg
                    className="svg-icon w-6 h-6 text-blue-700"
                    viewBox="0 0 20 20"
                >
                    <path fill="none" d="..." />
                </svg>
            </a>
        </li>

        {/* Dribbble */}
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
            <a href="#">
                <svg
                    className="svg-icon w-6 h-6 text-blue-500"
                    viewBox="0 0 20 20"
                >
                    <path fill="none" d="..." />
                </svg>
            </a>
        </li>

        {/* Pinterest */}
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
            <a href="#">
                <svg
                    className="svg-icon w-6 h-6 text-red-600"
                    viewBox="0 0 20 20"
                >
                    <path fill="none" d="..." />
                </svg>
            </a>
        </li>
    </ul>
</div>;
