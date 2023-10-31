import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  useDispatch,
  AppDispatch,
  useSelector,
  selectUserStatus,
  userRegister,
} from "../../redux";
import { UserInfo } from "../../utils";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectUserStatus);
  const [repasswordCheck, setRePasswordCheck] = useState("");

  async function register(e: React.FormEvent) {
    e.preventDefault();
    if (repassword === password) {
      setRePasswordCheck("");
      dispatch(userRegister({ username, password, email } as UserInfo));
    } else setRePasswordCheck("Mật khẩu không trùng khớp");
  }

  if (status === "registered") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center md:px-6 pt-8 mx-auto md:h-full pt:mt-0">
        <a
          href="/"
          className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10"
        >
          <img src="/logo.png" className="mr-3 w-10" />
          <span>miFarm</span>
        </a>
        <div className="w-full max-w-lg p-6 space-y-8 sm:p-8 bg-white rounded-xl shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tạo tài khoản
          </h2>
          <form className="mt-8 space-y-6" onSubmit={register}>
            {(repasswordCheck || status) && (
              <div className="flex items-center text-sm text-red-600 font-medium">
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z"
                  ></path>
                </svg>
                {repasswordCheck || status}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên đăng nhập
              </label>
              <input
                type="text"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                placeholder="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                name="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                value={repassword}
                onChange={(ev) => setRePassword(ev.target.value)}
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded focus:ring-0 dark:focus:ring-lime-600 text-lime-600 bg-gray-100 border-gray-300"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  Tôi đồng ý với
                  <span className="ml-1 text-lime-600 hover:underline">
                    Điều kiện và Điều khoản
                  </span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-base font-medium text-center text-white bg-lime-600 rounded-xl hover:bg-lime-700 focus:ring-4 focus:ring-lime-300 sm:w-auto"
            >
              Đăng ký
            </button>
            <div className="text-sm font-medium text-gray-500">
              Đã có tài khoản?
              <Link to="/login" className="ml-1 text-lime-600 hover:underline">
                Đăng nhập ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-5"></div>
    </>
  );
}
