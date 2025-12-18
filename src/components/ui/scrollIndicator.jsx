import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollIndicator() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const checkScroll = () => {
            const hasMore =
                window.innerHeight + window.scrollY <
                document.body.scrollHeight - 10

            setShow(hasMore)
        }

        checkScroll()
        window.addEventListener("scroll", checkScroll)
        window.addEventListener("resize", checkScroll)

        return () => {
            window.removeEventListener("scroll", checkScroll)
            window.removeEventListener("resize", checkScroll)
        }
    }, [])

    if (!show) return null

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce text-white">
            <ChevronDown size={52} strokeWidth={2.5} />
        </div>
    )
}
