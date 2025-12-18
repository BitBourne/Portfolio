import { useEffect, useRef, useState } from "react"

export function useAnimationInView() {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return { ref, visible }
}




export default function AnimatedSection({ children, className = "" }) {
    const { ref, visible } = useAnimationInView()

    return (
        <div
            ref={ref}
            className={`opacity-0 ${visible ? "animate-[fadeSlide_1.5s_ease-out_forwards]" : ""} ${className}`}
        >
            {children}
        </div>
    )
}
