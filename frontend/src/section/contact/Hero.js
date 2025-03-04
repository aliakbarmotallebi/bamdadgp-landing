export default function Hero({ data }) {
  return (
    <section className="pt-36 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              ارتباط با ما
              <div>{data.contact_title}</div>
            </h1>
            <h6 className="text-gray-500  md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">
              {data.contact_slug}
            </h6>
            <div className="text-center mb-10 flex items-center justify-center gap-4">
              <a
                href="#"
                className="px-10 text-white bg-primary-500 hover:bg-primary-500/90 focus:ring-4 focus:outline-none focus:ring-primary-500/50 font-medium rounded-lg text-xl py-2.5 text-center inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 inline-block ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path>
                </svg>
                تماس با تیم پشتیبانی
              </a>
              <span className="h-10 inline-block w-0.5 bg-primary-200"></span>
              <span className="text-3xl text-zinc-800 font-medium">
                {data.contact_telephone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
