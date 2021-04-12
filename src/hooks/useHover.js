import {useState} from "react"

function useHover(defaultValue) {
    const [hovered, setHovered] = useState(defaultValue)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

}

export default useHover