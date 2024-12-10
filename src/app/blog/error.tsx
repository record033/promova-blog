'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h3>Blog page has made an oopsie</h3>
            <button
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}