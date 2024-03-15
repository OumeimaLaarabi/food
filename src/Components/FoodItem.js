export default function FoodItem({food}){
     return <div>
        <img src={food.images} alt=""/>
                <h1>{food.title}</h1>

     </div>
}