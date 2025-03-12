'use client'
import { Routes } from '@/route/routes'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import ReactMarkdown from 'react-markdown'

const LOCAL_API_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL

export default function Footer() {
  const [contact, setContact] = React.useState(null)
  const getContact = async () => {
    try {
      const response = await axios.get(`/api/contact`)
      setContact(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
  React.useEffect(() => {
    getContact()
  }, [])
  return (
    <footer className="relative bg-transparent w-full">
      <div className="w-full max-w-screen-xl mx-auto lg:p-4 pt-10 pb-0 grid grid-cols-7">
        <div className="flex flex-col lg:pe-12 px-8 col-span-7 lg:col-span-3">
          <div>
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-1 rtl:space-x-reverse"
            >
              <svg viewBox="0 0 14 16" className="h-24 text-neutral-600">
                <use href="/assets/images/bamdad-logo.svg#logo" />
              </svg>
            </a>
          </div>
          <div className="py-6 mb-6 lg:mb-0 lg:py-2 border-t border-gray-200">
            <h2 className="font-bold text-lg text-neutral-950">
              درباره گروه بامداد چه می دانید؟
            </h2>

            <div>
              <div
                id="about-us"
                className="mt-2 h-8 overflow-hidden transition-all duration-300"
              >
                <p className="text-justify font-medium leading-8 text-neutral-700">
                  پیشرو در خدمات پس از فروش در سراسر ایران
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-1 lg:pe-12 px-8 col-span-7 lg:col-span-2">
          <div>
            <h2 className="font-bold text-lg text-neutral-950">
              با ما در تماس باشید
            </h2>

            <ul className="mt-4 flex flex-col gap-8">
              <li className="flex items-center">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <g
                      fill="none"
                      stroke="#cc8e3550"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                    </g>
                  </svg>
                </span>
                <p className="ps-4">{contact?.data.contact_address}</p>
              </li>

              <li className="flex items-center">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      fill="#cc8e3550"
                      d="M100 152a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m136-36v60a12 12 0 0 1-12 12h-92v36a4 4 0 0 1-8 0v-36H32a12 12 0 0 1-12-12v-60a56.06 56.06 0 0 1 56-56h80V24a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-28v32h16a56.06 56.06 0 0 1 56 56m-112 64v-64a48 48 0 0 0-96 0v60a4 4 0 0 0 4 4Zm104-64a48.05 48.05 0 0 0-48-48h-16v76a4 4 0 0 1-8 0V68h-51.18A56 56 0 0 1 132 116v64h92a4 4 0 0 0 4-4Z"
                      strokeWidth="6.5"
                      stroke="#cc8e3550"
                    />
                  </svg>
                </span>
                <p className="ps-4">
                  <span>کدپستی:</span>
                  <span className="ps-1">
                    {contact?.data.contact_postal_code}
                  </span>
                </p>
              </li>

              <li className="flex items-start">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="none"
                      stroke="#cc8e3550"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.506 7.96A16.03 16.03 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.998-1.05a10 10 0 0 0 2.656-.639l1.52 1.52a12.05 12.05 0 0 0 5.657-5.657l-1.52-1.52a10 10 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.21 0 4.051 1.819 3.506 3.96"
                    />
                  </svg>
                </span>
                <p className="ps-4 flex flex-col gap-1">
                  <a href="tel:982166429535">
                    {contact?.data.contact_telephone}
                  </a>
                </p>
              </li>

              <li className="flex items-start">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <g fill="none" stroke="#cc8e3550" strokeWidth="1.5">
                      <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" />
                      <path
                        strokeLinecap="round"
                        d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8"
                      />
                    </g>
                  </svg>
                </span>
                <p className="ps-4">
                  <a href="tel:9821222334">{contact?.data.contact_email}</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col py-12 lg:py-0 lg:pe-12 px-8 col-span-7 lg:col-span-2">
          <div>
            <h2 className="font-bold text-lg text-neutral-950">ساعات کاری</h2>

            <div className="mt-4 flex flex-col gap-4">
              <ReactMarkdown>
                {contact?.data.contact_working_hours}
              </ReactMarkdown>
            </div>
          </div>

          <div className="py-6">
            <ul className="flex items-center w-full justify-center lg:justify-start gap-4">
              <li className="size-32 lg:size-48">
                <img src="/assets/images/logo-enamad.png" alt="" />
              </li>
              <li className="size-32 lg:size-48">
                <img src="/assets/images/samandehi.png" alt="" />
              </li>
              <li className="size-32 lg:size-48">
                <img src="/assets/images/logo-kar.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto border border-neutral-50 my-4"></div>
      <section className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap p-5 gap-2">
          <div className="max-w-full grow before:bg-neutral-800 before:w-1 before:h-1 before:inline-block before:rounded-full">
            <Link href={Routes.home} className="text-primary font-weight-bold">
              صفحه اصلی
            </Link>
          </div>
          <div className="max-w-full grow before:bg-neutral-800 before:w-1 before:h-1 before:inline-block before:rounded-full">
            <Link
              href={Routes.survey}
              className="text-primary font-weight-bold"
            >
              نظرسنجی
            </Link>
          </div>
          <div className="max-w-full grow before:bg-neutral-800 before:w-1 before:h-1 before:inline-block before:rounded-full">
            <Link
              href={Routes.feedback}
              className="text-primary font-weight-bold"
            >
              انتقادات و پیشنهادات
            </Link>
          </div>
          <div className="max-w-full grow before:bg-neutral-800 before:w-1 before:h-1 before:inline-block before:rounded-full">
            <Link
              href={Routes.representatives}
              className="text-primary font-weight-bold"
            >
              مراکز خدمات بامداد سرویس
            </Link>
          </div>
          <div className="max-w-full grow before:bg-neutral-800 before:w-1 before:h-1 before:inline-block before:rounded-full">
            <Link href={Routes.store} className="text-primary font-weight-bold">
              فروشگاه
            </Link>
          </div>
          <div className="max-w-full grow before:bg-neutral-800 before:w-1 before:h-1 before:inline-block before:rounded-full">
            <Link
              href={Routes.contact}
              className="text-primary font-weight-bold"
            >
              تماس با ما
            </Link>
          </div>
        </div>
      </section>
      <div className="border-t border-[#888e3520]">
        <div className="w-full max-w-screen-xl mx-auto p-4 text-xs lg:text-base flex justify-between items-center">
          <div>
            <a
              title="گروه تجاری بامداد"
              href="#"
              rel="follow"
              className="cursor-pointer"
            >
              گروه تجاری بامداد
            </a>
            - پلتفرم برتر تجاری © 2024. تمامی حقوق متعلق به شرکت
            <span className="text-primary-500"> گروه تجاری بامداد </span>
            است.
          </div>
          <a href="#anchor" className="lg:flex hidden items-center gap-2">
            <span className="block size-6">
              <svg
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>up_fill</title>
                  <g
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Arrow"
                      transform="translate(-434.000000, -48.000000)"
                    >
                      <g
                        id="up_fill"
                        transform="translate(434.000000, 48.000000)"
                      >
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M10.9393,7.93932 C11.5251,7.35354 12.4749,7.35354 13.0607,7.93932 L18.7175,13.5962 C19.3033,14.182 19.3033,15.1317 18.7175,15.7175 C18.1317,16.3033 17.182,16.3033 16.5962,15.7175 L12,11.1213 L7.40381,15.7175 C6.81802,16.3033 5.86827,16.3033 5.28248,15.7175 C4.6967,15.1317 4.6967,14.182 5.28249,13.5962 L10.9393,7.93932 Z"
                          id="路径"
                          fill="#000000"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="">رفتن به بالای صفحه</span>
          </a>
        </div>
      </div>
      <ToastContainer position="bottom-right"></ToastContainer>
    </footer>
  )
}
