import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useSelector,
  selectUserInfo,
  userSlice,
  useDispatch,
  AppDispatch,
} from "../../redux";

export default function Navbar() {
  const userInfo = useSelector(selectUserInfo);
  const [noti, setNoti] = useState(false);
  const [profileBtn, setProfileBtn] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const buttonRef = useRef(null);

  const dispatch = useDispatch<AppDispatch>();
  function logout() {
    dispatch(userSlice.actions.userLogout());
    setProfileBtn(false);
  }

  const blurHandle = () => {
    setTimeout(() => {
      if (document.activeElement !== buttonRef.current) {
        setProfileBtn(false);
      }
    }, 0); // Use a minimal delay
  };

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch("");
    navigate("/search/" + search);
  };

  return (
    <>
      <nav className="fixed z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="md:px-12 lg:px-24 px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start flex-1">
              {/* mobile menu */}
              <button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              {/* logo */}
              <Link to="/" className="flex ml-2 lg:mr-24">
                <img src="/logo.png" className="h-8 mr-2" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  miFarm
                </span>
              </Link>

              {/* search */}
              <form
                onSubmit={searchHandler}
                method="GET"
                className="hidden lg:flex flex-1 lg:pr-8"
              >
                <div className="relative mt-1 w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"></div>
                  <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-lime-600 focus:border-lime-500 block w-full pl-8 p-2.5"
                    placeholder="Tìm kiếm tên sản phẩm ..."
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-1.5 bottom-[50%] translate-y-[50%] bg-lime-600/90 hover:bg-lime-700 focus:ring-0 focus:outline-none font-medium rounded-full text-sm px-4 py-1.5"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* button group */}
            <div className="relative flex items-center gap-2">
              {/* cart */}
              <Link
                to="/cart"
                type="button"
                className="hidden p-1.5 sm:flex hover:bg-gray-100 text-lime-600/90 focus:outline-none focus:ring-0 rounded-full text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08416 2.7512C2.22155 2.36044 2.6497 2.15503 3.04047 2.29242L3.34187 2.39838C3.95839 2.61511 4.48203 2.79919 4.89411 3.00139C5.33474 3.21759 5.71259 3.48393 5.99677 3.89979C6.27875 4.31243 6.39517 4.76515 6.4489 5.26153C6.47295 5.48373 6.48564 5.72967 6.49233 6H17.1305C18.8155 6 20.3323 6 20.7762 6.57708C21.2202 7.15417 21.0466 8.02369 20.6995 9.76275L20.1997 12.1875C19.8846 13.7164 19.727 14.4808 19.1753 14.9304C18.6236 15.38 17.8431 15.38 16.2821 15.38H10.9792C8.19028 15.38 6.79583 15.38 5.92943 14.4662C5.06302 13.5523 4.99979 12.5816 4.99979 9.64L4.99979 7.03832C4.99979 6.29837 4.99877 5.80316 4.95761 5.42295C4.91828 5.0596 4.84858 4.87818 4.75832 4.74609C4.67026 4.61723 4.53659 4.4968 4.23336 4.34802C3.91052 4.18961 3.47177 4.03406 2.80416 3.79934L2.54295 3.7075C2.15218 3.57012 1.94678 3.14197 2.08416 2.7512Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>

              {userInfo?.username ? (
                <>
                  {/* notification */}
                  <button
                    onClick={() => setNoti(!noti)}
                    onBlur={() => setNoti(false)}
                    type="button"
                    className="hidden sm:flex relative p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-lime-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>

                    {noti && (
                      <div className="absolute top-12 -right-36 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded-xl shadow-xl dark:divide-gray-600 dark:bg-gray-700">
                        <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          Thông báo
                        </div>
                        <div>
                          <div className="max-w-sm py-20 px-16 flex flex-col items-center">
                            <div className="flex items-center space-x-3 mb-12 px-6 py-3 border border-gray-100 rounded-lg shadow-lg">
                              <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                              <div className="flex justify-between flex-col">
                                <div className="h-2.5 w-32 bg-gray-200 rounded-full my-1"></div>
                                <div className="h-2 w-20 bg-gray-100 rounded-full my-1"></div>
                              </div>
                            </div>

                            <h5 className="my-2 text-base font-bold text-gray-500">
                              Chưa có thông báo nào
                            </h5>
                            <p className="mb-3 font-normal text-sm text-gray-400 text-center">
                              Ngay khi có thông báo nào, bạn có thể tìm thấy ở
                              đây
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>

                  {/* avt */}
                  <div className="flex items-center ml-1 mr-3">
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 overflow-hidden border-1 border-gray-100 rounded-full focus:ring-0"
                      onClick={() => setProfileBtn(!profileBtn)}
                      onBlur={blurHandle}
                    >
                      <img
                        className="w-8 h-8"
                        src={userInfo.profilePic}
                        alt="user photo"
                      />
                    </button>
                    <div
                      className={
                        (!profileBtn && "hidden") +
                        " absolute top-12 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-xl shadow-xl"
                      }
                    >
                      <div className="px-4 py-3">
                        <p className="text-sm text-gray-900">
                          {userInfo.username}
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                          {userInfo.email}
                        </p>
                      </div>
                      <ul className="py-1">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Hồ sơ
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Đơn hàng
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Cài đặt
                          </a>
                        </li>

                        <hr className="my-1 border-gray-200 mx-auto dark:border-gray-700" />

                        <li>
                          <button
                            ref={buttonRef}
                            onClick={logout}
                            className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Đăng xuất
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="hidden sm:flex gap-1">
                  <Link
                    to="/register"
                    className="rounded-full text-sm font-medium flex items-center px-5 py-2.5 mx-1 my-1 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Đăng ký
                  </Link>
                  <Link
                    to="/login"
                    className="py-2 px-4 mx-1 my-1 rounded-full text-sm flex items-center font-medium text-white bg-lime-600 hover:bg-lime-700/70 focus:ring-0 focus:outline-none"
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[4.5rem] w-full"></div>
    </>
  );
}
