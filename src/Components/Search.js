import { useEffect, useState } from "react"
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY ="e75efefd2ea74e0a8d256147d19d53ef"

export default function Search(){
    
const [query , setQuery] = useState("pizza")
//syntax of the effect hook
useEffect(()=> {
     function fetchfood(){
   
}}, [query])
return (
    <div>
        <input value={query}
        onChange={(e) => setQuery(e.target.value)} type="text"  />

    </div>
)

}