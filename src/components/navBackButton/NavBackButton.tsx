"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NavBackButton: React.FC = () => {
    const router = useRouter()

    return (
        <button
            onClick={() => router.back()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
            Back
        </button>
    )

}

export default NavBackButton