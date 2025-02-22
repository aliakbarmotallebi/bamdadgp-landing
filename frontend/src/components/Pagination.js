export default function Pagination(){
    return (

        <div className="mt-16">
          <ul className="flex items-center gap-2 w-fit mx-auto">
            <li>
              <a
                href="#"
                className="bg-transparent hover:bg-primary-300 p-2 rounded-md group hover:shadow-custom hover:shadow-primary/20 duration-300 transition-all text-base-color hover:text-white w-8 h-8 flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  className="fill-current rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.875 1.00002C5.875 0.698772 5.69476 0.426758 5.41733 0.309338C5.13991 0.191918 4.81916 0.251883 4.60289 0.461594L0.47789 4.4616C0.332219 4.60285 0.25 4.79711 0.25 5.00002C0.25 5.20293 0.332219 5.39719 0.47789 5.53844L4.60289 9.53844C4.81916 9.74816 5.13991 9.80812 5.41733 9.6907C5.69476 9.57328 5.875 9.30127 5.875 9.00002V5.75002L13 5.75002C13.4142 5.75002 13.75 5.41423 13.75 5.00002C13.75 4.58581 13.4142 4.25002 13 4.25002L5.875 4.25002V1.00002Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-transparent hover:bg-primary-300 p-2 rounded-md group hover:shadow-custom hover:shadow-primary/20 duration-300 transition-all text-base-color hover:text-white w-8 h-8 flex items-center justify-center"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-primary-200 hover:bg-primary-300 p-2 rounded-md group shadow-custom hover:shadow-custom shadow-primary/20 hover:shadow-primary/20 duration-300 transition-all text-white hover:text-white w-8 h-8 flex items-center justify-center"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-transparent hover:bg-primary-300 p-2 rounded-md group hover:shadow-custom hover:shadow-primary/20 duration-300 transition-all text-base-color hover:text-white w-8 h-8 flex items-center justify-center"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-transparent hover:bg-primary-300 p-2 rounded-md group hover:shadow-custom hover:shadow-primary/20 duration-300 transition-all text-base-color hover:text-white w-8 h-8 flex items-center justify-center"
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.875 1.00002C5.875 0.698772 5.69476 0.426758 5.41733 0.309338C5.13991 0.191918 4.81916 0.251883 4.60289 0.461594L0.47789 4.4616C0.332219 4.60285 0.25 4.79711 0.25 5.00002C0.25 5.20293 0.332219 5.39719 0.47789 5.53844L4.60289 9.53844C4.81916 9.74816 5.13991 9.80812 5.41733 9.6907C5.69476 9.57328 5.875 9.30127 5.875 9.00002V5.75002L13 5.75002C13.4142 5.75002 13.75 5.41423 13.75 5.00002C13.75 4.58581 13.4142 4.25002 13 4.25002L5.875 4.25002V1.00002Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

    )
}