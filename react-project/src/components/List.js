import ProductItem from "./ProductItem"

function List (){

    return (
        <div>
            <h1> Products </h1>
            <ul>
               <ProductItem marker="Santana" releaseYear={1997} />
               <ProductItem marker="Opala" releaseYear={1992} />
               <ProductItem marker="Monza" releaseYear={1996} />
               <ProductItem ></ProductItem>
            </ul>
        </div>
    )
}

export default List