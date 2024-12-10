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
            <h3>Something went wrong on our blog post, not scientific stuff</h3>
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