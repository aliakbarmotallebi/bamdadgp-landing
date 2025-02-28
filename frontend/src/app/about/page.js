import { getAboutus } from "@/api/about";
import Hero from "@/section/about/Hero";

export default async function About() {
  const { data } = await getAboutus();
  return (
    <>
      <Hero aboutTitle={data.about_title} aboutSlug={data.about_slug} />
      <section className="relative pt-12 pb-5">
        <div className="mb-10 mx-auto max-w-7xl text-lg text-justify space-y-5 space-y-reverse">
          <h3 className="text-3xl font-bold mb-5">درباره گروه تجاری بامداد</h3>
          <p className="leading-loose">{data.about_us}</p>
          <div className="bg-zinc-300 h-px w-full"></div>
          <h3 className="text-3xl font-bold">چرا ما؟</h3>
          <p className="leading-loose">{data.why_us}</p>
        </div>
      </section>
    </>
  );
}
