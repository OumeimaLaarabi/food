import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f5c09f3d628348d2a5249e635aae0295";

export default function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pasta");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results );
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]); 

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        </div>
    );
}
