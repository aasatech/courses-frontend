'use client';
import Link from 'next/link';
import {GiSmartphone, GiAlarmClock} from 'react-icons/gi';
import {HiOutlineMapPin} from 'react-icons/hi2';
import {MdOutlineMailOutline} from 'react-icons/md';
// import {usePathname} from 'react';

export const NavbarHomePage = () => {
  // const pathname = usePathname();

  return (
    <div class="grid grid-rows-3 grid-flow-col">
      <div class="row-span-3 bg-white">
        <img src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/logo.png" />
      </div>

      <div class=" col-span-3 bg-slate-500">
        <nav className=" bg-[#002935] border-gray-200 dark:bg-black">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/home" className="flex items-center space-x-3 rtl:space-x-reverse"></Link>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <div className="flex text-white items-start space-x-4 hover:text-[#ff3158]">
                  <GiSmartphone className="h-5 w-5" />
                  <li>
                    <Link
                      href="/"
                      className="block py-2 font-sans text-base px-3 text-white hover:text-[#ff3158] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff3158] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      aria-current="page">
                      11 212-226-3126
                    </Link>
                  </li>
                </div>
                <h1 className="text-sm text-white">|</h1>
                <div className="flex text-white space-x-4 hover:text-[#ff3158]">
                  <HiOutlineMapPin className="h-5 w-5" />
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 font-sans text-base text-white hover:text-[#ff3158] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff3158] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      457-Mott Street, NY 5001
                    </Link>
                  </li>
                </div>
                <h1 className="text-sm text-white">|</h1>
                <div className="flex text-white space-x-4 hover:text-[#ff3158]">
                  <GiAlarmClock className="h-5 w-5" />
                  <li>
                    <Link
                      href="/"
                      className="block py-2 px-3 font-sans text-base text-white hover:text-[#ff3158] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff3158] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Mon-Sat 8.00 - 18.00
                    </Link>
                  </li>
                </div>
                <h1 className="text-sm text-white">|</h1>
                <div className="flex text-white space-x-4 items-start hover:text-[#ff3158]">
                  <MdOutlineMailOutline className="h-5 w-5" />
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-3 font-sans text-base text-white hover:text-[#ff3158] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff3158] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      eduquest@gmail.com
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="row-span-2 col-span-3">
        <nav className="bg-[#ff3158] border-gray-200 dark:bg-[#ff3158]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    class="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Home +
                  </button>
                  <div
                    id="dropdownNavbar"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    //
  );
};
