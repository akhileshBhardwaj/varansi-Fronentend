const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="h-6 w-6">
    <path
      fill="#EA4335"
      d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.6 17.7 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.1 5.3-4.5 7l7.3 5.7c4.3-4 6.9-9.9 6.9-17.2z"
    />
    <path
      fill="#FBBC05"
      d="M10.4 28.7c-.5-1.4-.8-2.9-.8-4.7s.3-3.3.8-4.7l-7.8-6.1C1 16.4 0 20.1 0 24s1 7.6 2.6 10.8l7.8-6.1z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.3-5.7c-2 1.4-4.7 2.2-7.9 2.2-6.3 0-11.7-4.1-13.6-9.8l-7.8 6.1C6.5 42.6 14.6 48 24 48z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      fill="#fff"
      d="M16.7 15.5l.5-3.5h-3.4V9.8c0-1 .5-1.9 2-1.9h1.5V5c-.9-.1-1.8-.2-2.7-.2-2.8 0-4.6 1.7-4.6 4.7V12H6.9v3.5H10V24h3.8v-8.5h2.9z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path d="M16.4 12.7c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.8-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.800 2.500 3.100 2.400 1.200 0 1.700-.8 3.200-.8 1.500 0 1.900.8 3.200.8 1.300 0 2.200-1.200 3-2.300.9-1.300 1.300-2.600 1.300-2.700-.1 0-2.700-1-2.700-4.100zM14 5.500c.7-.8 1.100-1.900 1-3-1 0-2.100.7-2.800 1.500-.6.700-1.100 1.800-1 2.900 1.100.1 2.100-.6 2.800-1.400z" />
  </svg>
);

const providers = [
  { name: "Google", Icon: GoogleIcon },
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Apple", Icon: AppleIcon },
];

export default function SocialButtons() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {providers.map(({ name, Icon }) => (
        <button
          key={name}
          type="button"
          className="flex h-14 [@media(max-height:800px)]:lg:h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
        >
          <Icon />
          <span className="hidden sm:inline">{name}</span>
        </button>
      ))}
    </div>
  );
}
