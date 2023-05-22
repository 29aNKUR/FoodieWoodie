import react from "react";
import RestaurantItemCategory from "./RestaurantItemCategory";


const RestaurantNestedItemCategory = ({nestedCategory}) => {

    // const [isVisible , setIsVisible] = useState();

    return (
        <div>
            <div>
                <h1>{nestedCategory?.title}</h1>
            </div>

            <div>
                {nestedCategory?.categories?.map((category)=>{
                    <RestaurantItemCategory ItemCategory={category}/>
                })}
            </div>
        </div>
    )
}

export default RestaurantNestedItemCategory;