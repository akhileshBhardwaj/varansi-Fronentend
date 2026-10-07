import React, { useState } from "react";

// Brand icons ke liye inline SVG (lucide ke naye versions me brand icons nahi hote)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    {...props}
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5.4 8.6H2.2V20h3.2V8.6zM3.8 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.8 13.3c0-3-1.6-4.9-4.2-4.9-1.4 0-2.4.7-2.9 1.5V8.6h-3.1V20h3.2v-6.2c0-1.6.8-2.6 2.1-2.6 1.2 0 1.9.9 1.9 2.5V20h3.2l-.2-6.7z" />
  </svg>
);

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const AboutTeamCard = ({
  member,
  index,
  visible,
  active,
  onActivate,
  onDeactivate,
}) => {
  const [photoFailed, setPhotoFailed] = useState(false);

  const socials = [
    { key: "facebook", label: "Facebook", Icon: FacebookIcon },
    { key: "instagram", label: "Instagram", Icon: InstagramIcon },
    { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    // OUTER: sirf entrance animation (delay yahin, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`h-full py-3 transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-at-card
        onPointerEnter={() => onActivate(member.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(member.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`flex h-full overflow-hidden rounded-2xl bg-white ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/5 ring-black/5"
        }`}
      >
        {/* PHOTO */}
        <div className="relative w-[38%] shrink-0 self-stretch overflow-hidden bg-linear-to-br from-[#f3dccb] to-[#d9a98a]">
          {!photoFailed ? (
            <img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              onError={() => setPhotoFailed(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
                active ? "scale-110" : "scale-100"
              }`}
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-[22px] font-semibold text-[#9a4a14]">
              {getInitials(member.name)}
            </span>
          )}
        </div>

        {/* DETAILS */}
        <div className="flex min-w-0 flex-1 flex-col p-4">
          <h3
            className={`text-[14px] font-semibold transition-colors duration-300 ${
              active ? "text-[#e9722a]" : "text-[#1a1410]"
            }`}
          >
            {member.name}
          </h3>

          <p className="mt-1 text-[12px] text-[#6b6159]">{member.role}</p>

          <p className="mt-2.5 text-[12px] leading-relaxed text-[#5b5148]">
            {member.bio}
          </p>

          {/* SOCIALS */}
          <div className="mt-auto flex items-center gap-3 pt-3">
            {socials.map(({ key, label, Icon }) => (
              <a
                key={key}
                href={member.socials[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} on ${label}`}
                className={`transition-all duration-300 hover:-translate-y-0.5 hover:scale-125 hover:text-[#e9722a] active:scale-90 ${
                  active ? "text-[#e9722a]" : "text-[#1a1410]"
                }`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutTeamCard;
