'use client';
import Link from 'next/link';
import {GiSmartphone, GiAlarmClock} from 'react-icons/gi';
import {HiOutlineMapPin} from 'react-icons/hi2';
import {MdOutlineMailOutline} from 'react-icons/md';
import {IoSearch} from 'react-icons/io5';
import {IoMdClose} from 'react-icons/io';
import {useState} from 'react';

export const NavbarHomePage = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isCourseDropdownVisible, setCourseDropdownVisible] = useState(false);
  const [isPagesDropdownVisible, setPagesDropdownVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div class="grid h-[130px] grid-flow-col">
      <div class="row-span-3 col-span-3 bg-white flex justify-end items-center">
        <img
          className="md:absolute left-0 md:left-[280px] "
          src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/logo.png"
          alt="Logo"
        />
      </div>

      <div class=" col-span-2">
        <nav className=" max-w-screen-2xl h-[50px] bg-[#002935] border-gray-200 dark:bg-black">
          <div className=" flex flex-wrap items-center justify-center mx-auto p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
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

      <div class="col-span-2">
        <nav className="max-w-screen-2xl h-[80px] bg-[#ff3158] border-gray-200 dark:bg-[#ff3158]">
          <div className=" flex flex-wrap items-center justify-center mx-auto p-4">
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
              <ul className="font-medium flex flex-col items-center justify-center md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="relative group">
                  <button
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-5 px-3 text-white rounded md:dark:hover:bg-transparent z-30">
                    Home <span className={`hover:text-black pl-1 ${isDropdownVisible ? 'text-black' : ''}`}>+</span>
                  </button>
                  {isDropdownVisible && (
                    <div
                      id="dropdownHome"
                      onMouseEnter={() => setDropdownVisible(true)}
                      onMouseLeave={() => setDropdownVisible(false)}
                      className="absolute z-10 origin-top-right bg-white divide-y divide-gray-100 shadow w-44 group">
                      <ul className="py-0 text-sm text-gray-700 dark:text-gray-400">
                        <li>
                          <a
                            href="/home1"
                            id="dropdownHomeLink"
                            data-dropdown-toggle="dropdownHome"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Home1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Home2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Home3
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Home4
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Home4
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className="relative group">
                  <button
                    onMouseEnter={() => setCourseDropdownVisible(true)}
                    onMouseLeave={() => setCourseDropdownVisible(false)}
                    id="dropdownCoursesLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="aria-hidden:flex items-center justify-between w-full py-5 px-3 text-white rounded md:dark:hover:bg-transparent">
                    Courses{' '}
                    <span className={`hover:text-black pl-1 ${isCourseDropdownVisible ? 'text-black' : ''}`}>+</span>
                  </button>
                  {isCourseDropdownVisible && (
                    <div
                      onMouseEnter={() => setCourseDropdownVisible(true)}
                      onMouseLeave={() => setCourseDropdownVisible(false)}
                      id="dropdownNavbarCourses"
                      className="absolute z-10 origin-top-right bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600 group">
                      <ul className="py-0 text-sm text-gray-700 dark:text-gray-400">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Course
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600">
                            Course V2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Course Detail
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative group">
                  <button
                    onMouseEnter={() => setPagesDropdownVisible(true)}
                    onMouseLeave={() => setPagesDropdownVisible(false)}
                    id="dropdownNavbarPagesLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-5 px-3 text-white rounded md:dark:hover:bg-transparent">
                    Pages <span className={`hover:text-black pl-1 ${isPagesDropdownVisible ? 'text-black' : ''}`}>+</span>
                  </button>
                  {isPagesDropdownVisible && (
                    <div
                      onMouseEnter={() => setPagesDropdownVisible(true)}
                      onMouseLeave={() => setPagesDropdownVisible(false)}
                      id="dropdownNavbar"
                      className="absolute z-30 hidden origin-top-right bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600 group-hover:block">
                      <ul className="py-0 text-sm text-gray-700 dark:text-gray-400">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Course
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Course V2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Course Detail
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Team
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Faq
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:text-[#ff3158] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            404 Page
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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
                <li className="relative">
                  <div className="block py-2 px-5 pl-5 text-white">
                    {isSearchVisible ? (
                      <IoMdClose className="h-5 w-5" onClick={handleSearchClick} />
                    ) : (
                      <IoSearch className="h-5 w-5" onClick={handleSearchClick} />
                    )}
                  </div>

                  {isSearchVisible && (
                    <div className="absolute z-30 top-[30px] left-0 mt-5 p-5 bg-white shadow rounded-lg">
                      <input type="text" placeholder="search..." className="border border-gray-100 rounded-lg" />
                    </div>
                  )}
                </li>

                <li>
                  <Link href="#" className="block text-white bg-[#002935] px-5 py-3 rounded-lg">
                    <button>Join Now</button>
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
