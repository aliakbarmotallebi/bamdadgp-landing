'use client'
import useProductStore from "@/stores/product";

export default function Introduction(){
    const {activeTab} = useProductStore();
    return (
        <>
                <div className={`${activeTab == 1 ? 'block' : 'hidden'} mt-6`} >
                    <div className="pt-4 text-orange-900 font-semibold text-base">
                    معرفی کوتاه محصول
                    </div>
                    <div className="pt-4 text-gray-700 font-light">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، ستون و سطرآنچنان که لازم است،
                    و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                    بهبود ابزارهای کاربردی می باشد، کتابهای
                    </div>
                </div>
        </>
    )
}