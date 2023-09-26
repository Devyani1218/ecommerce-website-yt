import ProductCard from "./ProductCard";
const data=[
  { id:0, img:"/public/images/product__5.webp",name:"Tomatoes", price:"$90"},
  { id:1, img:"/public/images/product__2.webp",name:"Dried Mango", price:"$40"},
  { id:2, img:"/public/images/product__3.webp",name:"Jewel Cranberries", price:"$35"},
  { id:3, img:"/public/images/product__4.webp",name:"Crunchy Crisps", price:"$30"},
]

const FeatureSectionBreakfast = () => {
  return (
    
        <div className="container pt-16">
          <div className="lg:flex justify-between items-center">
            <div>
              <h3 className="font-medium text-2xl">Breakfast and Dairy</h3>
              <p className="text-gray-600 mt-2">
              Buy best quality breakfast online from big-basket stop near you.
              </p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
              <button className="feature_btn">Eggs & Dairy</button>
              <button className="text-gray-600 hover:text-accent">
                Pizza
              </button>
              <button className="text-gray-600 hover:text-accent">
                Snacks
              </button>
            </div>
          </div>
    
          <div className="grid sm:grid-cols-2 md:grid-cols-4 pt-8 gap-2 lg:grid-cols-5">
            <div>
              <img
                className="w-full h-full oject-cover"
                src="/public/images/feature__2.webp"
                alt="banner"
              />
            </div>
            {data.map((el) => (
              <ProductCard
                key={el.id}
                img={el.img}
                name={el.name}
                price={el.price}
              />
            ))}
          </div>
        </div>
  )
}

export default FeatureSectionBreakfast
