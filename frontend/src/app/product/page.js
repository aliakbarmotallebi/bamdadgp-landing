import Swiper from "@/components/Swiper";
import Comments from "@/section/product/Comments";
import Details from "@/section/product/Details";
import Introduction from "@/section/product/Introduction";
import Review from "@/section/product/Review";
import Specs from "@/section/product/Specs";
import Tab from "@/section/product/Tab";

export default function Product(){
    // const activeTab = 1;

    const activeTab = (val)=>{
        return val;
    }

    return(
        <>
        <section
        className="pb-8 antialiased md:pb-16 pt-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
      >
         <div className="mx-4 lg:mx-0">
            
            <Details />
       
            <section className="mt-12 text-justify" x-data="{ activeTab:  0 }">
                <Tab />

                <Introduction />
                <Review />
                <Specs />
                <Comments />
              
            </section>
            <div className="py-12">
                <Swiper />
            </div>
            </div>
        </section>
        </>
    )

}