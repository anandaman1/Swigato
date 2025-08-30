import { GroceryGridCard } from "../Utils/Grocery"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
                    {
                        GroceryGridCard.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
                    }
                  </div>
        </div>
    )
}