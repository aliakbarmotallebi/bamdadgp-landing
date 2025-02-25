import { getSingleProduct, getSpecesProduct } from "@/api/products";
import Swiper from "@/components/Swiper";
import Comments from "@/section/product/Comments";
import Details from "@/section/product/Details";
import Introduction from "@/section/product/Introduction";
import Specs from "@/section/product/Specs";
import Tab from "@/section/product/Tab";

export default async function Product({params}){
    const urlParams = await params;
    const product = await getSingleProduct(urlParams.slug);
    const speces = await getSpecesProduct(product.data[0].id)
    return(
        <>
        <section
        className="pb-8 antialiased md:pb-16 pt-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
        >
         <div className="mx-4 lg:mx-0">
            
            <Details data={product.data[0]} />
       
            <section className="mt-12 text-justify">
                <Tab />
                <Introduction data={product.data[0].product_description} />
                <Specs data={speces.data[0]} />
                <Comments data={product.data[0].comments} />
              
            </section>
            <div className="py-12">
                <Swiper />
            </div>
            </div>
        </section>
        </>
    )

}