import { useState } from "react";
import { User, Phone, ChevronDown, ArrowRight } from "lucide-react";
import InputField from "../../../components/login/InputField";
import SocialButtons from "../../../components/login/SocialButtons";

export default function SignupCard() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    code: "+91",
    phone: "",
    password: "",
    confirm: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const set = (key) => (e) =>
    setForm({ ...form, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return setError("Passwords do not match");
    if (!form.agree) return setError("Please accept the Terms & Privacy Policy");
    setError("");
    console.log(form);
    // TODO: call your signup API here
  };

  return (
    <div className="w-full max-w-120 overflow-hidden rounded-3xl bg-white text-gray-800 shadow-2xl shadow-black/40 transition-shadow duration-500 hover:shadow-orange-900/30">
      <form onSubmit={handleSubmit} className="space-y-3.5 p-5 sm:p-7 [@media(max-height:800px)]:lg:space-y-2 [@media(max-height:800px)]:lg:p-5">
        <div>
          <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-gray-900 sm:text-3xl">
            Create Your Account
          </h2>
          <p className="mt-1.5 text-sm text-gray-500 [@media(max-height:800px)]:lg:hidden">
            Join our travel community and start your Varanasi experience today.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <InputField size="md" icon={User} placeholder="First Name" value={form.firstName} onChange={set("firstName")} />
          <InputField size="md" icon={User} placeholder="Last Name" value={form.lastName} onChange={set("lastName")} />
        </div>

        <InputField size="md" type="email" placeholder="Email Address" value={form.email} onChange={set("email")} />

        {/* Phone with country code */}
        <div className="group relative flex h-12 [@media(max-height:800px)]:lg:h-10 overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-orange-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
          <div className="relative flex w-28 items-center border-r border-gray-200">
            <Phone className="absolute left-4 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-orange-600" />
            <select
              value={form.code}
              onChange={set("code")}
              className="h-full w-full appearance-none bg-transparent pl-12 pr-6 text-gray-800 outline-none"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+971">+971</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 h-4 w-4 text-gray-400" />
          </div>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Phone Number"
            className="h-full flex-1 bg-transparent px-4 text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>

        <InputField size="md" type="password" placeholder="Password" value={form.password} onChange={set("password")} />
        <InputField size="md" type="password" placeholder="Confirm Password" value={form.confirm} onChange={set("confirm")} />

        <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={set("agree")}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-orange-600"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-orange-700 underline underline-offset-2 hover:text-orange-500">Terms &amp; Conditions</a>{" "}
            and{" "}
            <a href="#" className="text-orange-700 underline underline-offset-2 hover:text-orange-500">Privacy Policy</a>
          </span>
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="group flex h-12 [@media(max-height:800px)]:lg:h-10 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-700 to-orange-600 font-semibold text-white shadow-lg shadow-orange-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-700/50 active:translate-y-0"
        >
          Create Account
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>

        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
          <span className="h-px flex-1 bg-gray-200" />
          Or sign up with
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <SocialButtons />

        <p className="pt-1 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-orange-700 underline underline-offset-2 transition-colors hover:text-orange-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}