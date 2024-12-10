"use client"
import React, { useState, useCallback } from 'react'

import { debounce } from "lodash-es";
import { useRouter } from 'next/navigation'

type SearchProps = {
    search: string
}

const Search: React.FC<SearchProps> = ({ search }) => {
    const [inputValue, setInputValue] = useState(search);

    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSearchChange = useCallback(
        debounce((query: string) => {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set("page", "1")
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