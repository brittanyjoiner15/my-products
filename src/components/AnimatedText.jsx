import { useState, useEffect } from 'react'

function AnimatedText({ words }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false) // Start fade out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
                setIsAnimating(true) // Start fade in
            }, 500) // Wait for fade out to complete
        }, 3000) // Change word every 3 seconds

        return () => clearInterval(interval)
    }, [words.length])

    return (
        <span className={`animated-word ${isAnimating ? 'fade-in' : 'fade-out'}`}>
            {words[currentIndex]}
        </span>
    )
}

export default AnimatedText
