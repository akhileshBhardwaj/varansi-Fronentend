import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// icon: pass any lucide icon (User, Phone...). Default: Lock for password, Mail otherwise.
// size: "lg" (h-14, default) or "md" (h-12)
export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  size = "lg",
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const Icon = icon || (isPassword ? Lock : Mail);
  const height = size === "md" ? "h-12 [@media(max-height:800px)]:lg:h-10" : "h-14";

  return (
    <div className="group relative">
      <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-600" />
      <input
        type={isPassword && show ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${height} w-full rounded-xl border border-gray-200 bg-white pl-12 pr-12 text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-orange-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100`}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-orange-600"
          aria-label="Toggle password visibility"
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      )}
    </div>
  );
}