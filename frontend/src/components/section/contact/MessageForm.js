export default function MessageForm(){
    return (
        <div>
                    <form action="#">
                      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 justify-between w-full">
                        <div className="relative">
                          <input type="text" id="name"
                            className="border border-secondary/30 w-full rounded-xl py-2 z-20 outline-none focus:border-primary transition-all duration-300 pr-10 login"
                            placeholder="نام و نام خانوادگی" />
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                            className="absolute top-1/2 -translate-y-1/2 right-3" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="6" r="4" stroke="#919191" strokeWidth="1.5"></circle>
                            <path
                              d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                              stroke="#919191" strokeWidth="1.5" strokeLinecap="round"></path>
                          </svg>
                        </div>
                        <div className="relative">
                          <input type="text" id="phonenumber"
                            className="border border-secondary/30 w-full rounded-xl py-2 z-20 outline-none focus:border-primary transition-all duration-300 pr-10 login"
                            placeholder="شماره همراه" />
                          <svg xmlns="http://www.w3.org/2000/svg"  className="absolute stroke-gray-400 top-1/2 -translate-y-1/2 right-3" viewBox="0 0 24 24" width="20" height="20"><rect fill="none"/><path fill="none" stroke="current" strokeLinecap="round" strokeLinejoin="round" d="M19.506 7.96A16.03 16.03 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.998-1.05a10 10 0 0 0 2.656-.639l1.52 1.52a12.05 12.05 0 0 0 5.657-5.657l-1.52-1.52a10 10 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.21 0 4.051 1.819 3.506 3.96" strokeWidth="1.5"/></svg>
                        </div>
                        <div className="relative sm:col-span-2">
                          <textarea type="text" id="text"
                            className="border border-secondary/30 w-full rounded-xl py-2 z-20 outline-none focus:border-primary transition-all duration-300 pr-10 login"
                            placeholder="پیام شما" rows="6"></textarea>

                          <svg fill="none" className="absolute top-2 right-3 stroke-secondary stroke-gray-400" width="18" height="18"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12H9M16 12H12" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M16 8H15M12 8H8" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M8 16H13" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path
                              d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
                              strokeWidth="1.5" strokeLinecap="round"></path>
                          </svg>
                        </div>
                        <div>
                          <button type="submit"
                            className="bg-primary-500/80 transition-all duration-300 hover:bg-primary px-10 py-2.5 rounded-xl shadow-custom shadow-primary/10 text-white text-sm font-bold">
                            ارسال
                          </button>
                        </div>
                      </div>
                    </form>
        </div>
    )
}