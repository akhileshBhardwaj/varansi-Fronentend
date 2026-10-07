import { useState } from "react";
import { ArrowRight } from "lucide-react";
import InputField from "./InputField";
import SocialButtons from "./SocialButtons";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // TODO: call your login API here
  };

  return (
    <div className="w-full max-w-120 overflow-hidden rounded-3xl bg-white text-gray-800 shadow-2xl shadow-black/40 transition-shadow duration-500 hover:shadow-orange-900/30">
      <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-8">
        <div>
          <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-gray-900 sm:text-3xl">
            Login to Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Access your bookings, wishlist and exclusive offers.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <InputField
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-orange-600"
            />
            Remember me
          </label>
          <a
            href="#"
            className="font-medium text-orange-700 underline underline-offset-2 transition-colors hover:text-orange-500"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-700 to-orange-600 font-semibold text-white shadow-lg shadow-orange-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-700/50 active:translate-y-0"
        >
          Login
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>

        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <span className="h-px flex-1 bg-gray-200" />
          Or continue with
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <SocialButtons />

        <p className="pt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold text-orange-700 underline underline-offset-2 transition-colors hover:text-orange-500"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}