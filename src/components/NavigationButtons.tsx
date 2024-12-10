"use client"
import { useRouter } from 'next/navigation'

type NavigationButtonProps = {
    currentPage: number;
    totalPages: number;
}

const NavigationButtons: React.FC<NavigationButtonProps> = ({ currentPage, totalPages }) => {

    const router = useRouter()

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set("page", (currentPage + 1).toString());
            router.push(newUrl.toString());
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set("page", (currentPage - 1).toString());
            router.push(newUrl.toString());
        }
    };

    return (

        <div className="flex justify-center items-center mt-5 space-x-4">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`w-28 px-4 py-2 rounded bg-blue-600 text-white font-medium text-center transition-colors duration-300 ${currentPage === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-800"
                    }`}
            >
                Previous
            </button>
            <span className="text-gray-300 text-lg font-medium">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`w-28 px-4 py-2 rounded bg-blue-600 text-white font-medium text-center transition-colors duration-300 ${currentPage === totalPages
                    ? "bg-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-800"
                    }`}
            >
                Next
            </button>
        </div>

    )
}

export default NavigationButtons