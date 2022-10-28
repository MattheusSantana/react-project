import ProductItem from "../components/ProductItem"

function Product(){
    return (
    <div>
        <h1>Products</h1>
        <ProductItem marker="Santana" releaseYear={1997}/>
        <ProductItem marker="Opala" releaseYear={1986}/>
        <ProductItem marker="Monza" releaseYear={1992}/>
        
    </div>
        
    )
        
}

export default Product