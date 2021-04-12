import {useState, useRef, useEffect} from "react"

function useHover(defaultValue) {
    const [hovered, setHovered] = useState(defaultValue)
    const mouseRef = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        mouseRef.current.addEventListener("mouseenter", enter)
        mouseRef.current.addEventListener("mouseleave", leave)

        return () => {
            mouseRef.current.removeEventListener("mouseenter", enter)
            mouseRef.current.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, mouseRef]
}

export default useHover