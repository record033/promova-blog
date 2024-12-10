"use client"
import React, { useState, useCallback } from 'react'
import { debounce } from "lodash-es";
import { useRouter } from 'next/navigation'

const Search: React.FC = () => {
    const [inputValue, setInputValue] = useState("");

    const router = useRouter();

    const handleSearchChange = useCallback(
        debounce((query: string) => {
            const newUrl = new URL(window.location.href);
            if (query) {
                newUrl.searchParams.set("search", query);
            }
            else {
                newUrl.searchParams.delete("search")
            }
            router.push(newUrl.toString());
        }, 800), []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        handleSearchChange(value)
    };


    return (
        <div className="w-full flex justify-center mt-6">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search posts..."
                className="w-3/4 sm:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white placeholder-gray-500"
            />
        </div>
    )
}

export default Search