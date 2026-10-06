export const fastivelEventContent = {
  eyebrow: "Upcoming Events",
  title: "Festivals & Events",
  description:
    "Be a part of the vibrant festivals, cultural events and spiritual gatherings in Varanasi.",
  buttonText: "View All Events",
  buttonPath: "/events",
};

// Dhyan rakho: dates abhi demo wali hain, asli dates apne hisaab se badal lena.
// Regular event ke liye day/month ki jagah `regular: true` rakho.
export const fastivelEventItems = [
  {
    id: 1,
    day: "15",
    month: "Nov",
    category: "Festival",
    title: "Dev Deepawali",
    description: "Thousands of diyas light up the ghats in a magical scene.",
    location: "All Ghats",
    time: "Evening",
    image:
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1000&q=80",
    path: "/events/dev-deepawali",
  },
  {
    id: 2,
    day: "22",
    month: "Jan",
    category: "Spiritual",
    title: "Mahashivratri",
    description: "Grand celebrations at Kashi Vishwanath Temple.",
    location: "Kashi Vishwanath",
    time: "All Night",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
    path: "/events/mahashivratri",
  },
  {
    id: 3,
    regular: true,
    category: "Daily Ritual",
    title: "Ganga Aarti",
    description: "Experience the daily evening aarti at Dashashwamedh Ghat.",
    location: "Dashashwamedh Ghat",
    time: "6:45 PM",
    image:
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
    path: "/events/ganga-aarti",
  },
];
