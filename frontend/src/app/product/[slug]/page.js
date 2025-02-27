import { getCommentsProduct, getRelatedProducts, getSingleProduct, getSpecesProduct } from "@/api/products";
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
    const comments = await getCommentsProduct(product.data[0].id)

    let relatedProducts = [];
    if (product.data.length > 0) {
        relatedProducts = await getRelatedProducts(product.data[0].product_category.id);
    }
    console.log(speces);
    return(
        <>
        <section
        className="pb-8 antialiased md:pb-16 pt-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
        >
         <div className="mx-4 lg:mx-0 w-full">
            
            <Details data={product.data[0]} />
       
            <section className="mt-12 text-justify">
                <Tab />
                <Introduction data={product.data[0].product_description} />
                {/* <Specs data={speces.data[0]} /> */}
                {/* <Comments data={comments.data[0]['comments']} productId={product.data[0].id} /> */}
              
            </section>
            <div className="py-12 w-full">
                {/* <Swiper title={'محصولات مرتبط'} data={relatedProducts.data} /> */}
            </div>
         </div>
        </section>
        </>
    )

}