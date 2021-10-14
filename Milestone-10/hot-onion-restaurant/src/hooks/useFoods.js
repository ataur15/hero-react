import { useEffect } from "react";
import { useState } from "react"

const useFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('../foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return [foods, setFoods];
}

export default useFoods;