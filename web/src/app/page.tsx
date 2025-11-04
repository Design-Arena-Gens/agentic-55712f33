import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PiIceCream,
  PiLeafBold,
  PiSmileyBold,
  PiStorefrontBold,
  PiThermometerColdBold,
} from "react-icons/pi";

export const metadata: Metadata = {
  title: "Sundae Society | Artisan Ice Cream Parlour",
  description:
    "Discover small-batch, chef-crafted ice cream with seasonal flavors, plant-based scoops, and a dreamy dessert lounge experience.",
};

const flavors = [
  {
    name: "Berry Sunset Sorbet",
    description:
      "Hand-pressed strawberry, raspberry, and hibiscus with a sparkling citrus finish.",
    image: "/flavor-berry.jpg",
    badges: ["Plant Based", "Summer Favorite"],
  },
  {
    name: "Deep Cocoa Midnight",
    description:
      "Single-origin Ecuadorian cacao folded with salted caramel ribbons and cacao nib crunch.",
    image: "/flavor-choco.jpg",
    badges: ["Chef Series", "Gluten Free"],
  },
  {
    name: "Mint Garden Crunch",
    description:
      "Fresh mint steeped overnight, swirled with dark chocolate stracciatella and honeycomb.",
    image: "/flavor-mint.jpg",
    badges: ["Local Herbs", "Best Seller"],
  },
];

const experiences = [
  {
    icon: PiStorefrontBold,
    title: "Neighborhood Scoop Bar",
    description:
      "Tasting flights, affogatos, and seasonal parfaits served all day in our sunlit lounge.",
  },
  {
    icon: PiLeafBold,
    title: "Slow & Sustainable",
    description:
      "We churn in micro-batches using grass-fed dairy, organic produce, and compostable cups.",
  },
  {
    icon: PiThermometerColdBold,
    title: "Made Fresh Daily",
    description:
      "No freezers, no leftovers. Every morning starts with a brand new churn for peak flavor.",
  },
];

const testimonials = [
  {
    quote:
      "I thought I knew great ice cream until I tried Sundae Society. The textures are unreal.",
    name: "Amelia Rivers",
    title: "Travel Food Writer",
  },
  {
    quote:
      "Their plant-based sorbets have the same indulgent creaminess as dairy. Completely obsessed.",
    name: "Dev Patel",
    title: "Chef & Mentor",
  },
  {
    quote:
      "From the music to the menu, every detail is designed for joy. Perfect for date night.",
    name: "Lena Howard",
    title: "Local Guide Reviewer",
  },
];

const stats = [
  { value: "128K", label: "Scoops Shared" },
  { value: "56", label: "Seasonal Releases" },
  { value: "94%", label: "Return Guests" },
  { value: "12", label: "Local Farm Partners" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 text-brown-900 antialiased">
      <header className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-pink-50">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-[-18rem] hidden size-[600px] rounded-full bg-pink-200/30 blur-3xl lg:block" />
          <div className="absolute inset-y-0 left-[-12rem] size-[420px] rounded-full bg-tangerine-200/30 blur-3xl" />
        </div>

        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 pb-10 pt-8">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/30">
              <PiIceCream className="text-2xl" />
            </span>
            Sundae Society
          </Link>
          <div className="hidden items-center gap-10 text-sm font-medium text-brown-700 md:flex">
            <Link className="transition hover:text-pink-600" href="#flavors">
              Flavors
            </Link>
            <Link className="transition hover:text-pink-600" href="#experience">
              Experience
            </Link>
            <Link className="transition hover:text-pink-600" href="#events">
              Events
            </Link>
            <Link className="transition hover:text-pink-600" href="#visit">
              Visit
            </Link>
          </div>
          <Link
            href="#visit"
            className="hidden rounded-full bg-brown-900 px-5 py-2 text-sm font-semibold text-cream-50 shadow-lg shadow-brown-900/20 transition hover:bg-brown-800 md:inline-block"
          >
            Book a Tasting
          </Link>
        </nav>

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-brown-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brown-600">
              Small Batch Scoop Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-brown-950 sm:text-5xl lg:text-6xl">
              Craft ice cream, spun fresh every sunrise.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brown-700">
              Welcome to Sundae Society—where pastry chefs and farmers collide to
              create the most enchanting scoops in the city. From single-origin
              cacao to garden herbs, every batch tells a story worth tasting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#flavors"
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:bg-pink-400"
              >
                Explore Flavors
              </Link>
              <Link
                href="#events"
                className="inline-flex items-center justify-center rounded-full border border-brown-200 px-7 py-3 text-sm font-semibold text-brown-800 transition hover:border-brown-400 hover:text-brown-950"
              >
                Taste Lab Events
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-brown-950 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.3em] text-brown-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-tangerine-200 via-pink-200 to-cream-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/70 shadow-2xl shadow-pink-500/20 backdrop-blur">
              <Image
                src="/hero-sundae.jpg"
                alt="Gourmet ice cream sundae"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-brown-950/80 via-brown-950/20 to-transparent px-8 pb-8 pt-20 text-white">
                <span className="text-sm uppercase tracking-[0.5em] text-white/80">
                  Today&apos;s Chef Special
                </span>
                <p className="text-2xl font-semibold">Amber Honeycomb Sundae</p>
                <p className="text-sm text-white/80">
                  Burnt sugar caramel, wildflower honey shards, and roasted fig
                  drizzle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="flavors"
          className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28"
        >
          <div className="absolute inset-x-0 top-1/2 z-[-1] h-64 -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-100/60 to-transparent blur-3xl" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-pink-500">
                Flavor Flight
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brown-950 sm:text-4xl">
                Taste the season in every scoop.
              </h2>
            </div>
            <p className="max-w-md text-sm text-brown-700">
              Each flavor begins at our partner farms. We spotlight just six
              seasonal scoops at a time so every ingredient gets the care it
              deserves.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {flavors.map((flavor) => (
              <article
                key={flavor.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white/70 shadow-lg shadow-cream-400/20 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="flex h-full flex-col gap-4 px-7 py-6">
                  <div className="flex flex-wrap gap-2">
                    {flavor.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-brown-950">
                    {flavor.name}
                  </h3>
                  <p className="text-sm text-brown-700">{flavor.description}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-cream-200 pt-4">
                    <span className="text-sm font-semibold text-brown-600">
                      Limited Batch
                    </span>
                    <Link
                      href="#visit"
                      className="text-sm font-semibold text-pink-500 transition hover:text-pink-400"
                    >
                      Reserve tasting →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="bg-gradient-to-br from-brown-950 via-brown-900 to-brown-800 py-24 text-cream-50 sm:py-28"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-pink-200">
                Why We Churn
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                An ice cream ritual rooted in craftsmanship.
              </h2>
              <p className="mt-6 text-brown-100">
                Sundae Society began as a weekend pop-up between three pastry
                chefs. Today, our studio remains committed to slow techniques,
                transparent sourcing, and unforgettable dessert moments.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {experiences.map((experience) => (
                  <div
                    key={experience.title}
                    className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-pink-200/80 hover:bg-white/10"
                  >
                    <experience.icon className="text-3xl text-pink-200" />
                    <h3 className="text-lg font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-brown-100/80">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:w-1/2">
              <div className="absolute -inset-6 rounded-[3rem] border border-white/10" />
              <div className="relative overflow-hidden rounded-[3rem]">
                <Image
                  src="/store-interior.jpg"
                  alt="Sundae Society lounge interior"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 rounded-full bg-white/95 px-6 py-4 text-sm font-semibold text-brown-900 shadow-2xl shadow-brown-950/20">
                <PiSmileyBold className="text-xl text-pink-500" />
                Voted #1 Ice Cream Lounge · City Eats Awards
              </div>
            </div>
          </div>
        </section>

        <section
          id="events"
          className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28"
        >
          <div className="absolute inset-x-0 top-1/2 z-[-1] h-72 -translate-y-1/2 bg-gradient-to-r from-transparent via-tangerine-100/70 to-transparent blur-3xl" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-tangerine-500">
                Events & Collaborations
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brown-950 sm:text-4xl">
                Join the Sundae Society experience.
              </h2>
            </div>
            <Link
              href="#visit"
              className="inline-flex items-center justify-center rounded-full bg-brown-900 px-6 py-3 text-sm font-semibold text-cream-50 shadow-lg shadow-brown-900/20 transition hover:bg-brown-800"
            >
              Book Private Event
            </Link>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-4xl border border-cream-200 bg-white/80 shadow-xl shadow-tangerine-200/30">
              <div className="grid gap-10 p-10 sm:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold text-brown-950">
                    Chef&apos;s Table: Scoop Lab
                  </h3>
                  <p className="mt-4 text-sm text-brown-700">
                    A 6-course dessert progression featuring experimental
                    textures, liquid nitrogen bonbons, and playful pairings.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-brown-700">
                  <li className="flex items-center justify-between rounded-full bg-cream-100 px-4 py-2">
                    <span>July 18</span>
                    <span className="font-semibold text-brown-900">
                      6:30 PM
                    </span>
                  </li>
                  <li className="flex items-center justify-between rounded-full bg-cream-100 px-4 py-2">
                    <span>Limited to 12 Guests</span>
                    <span className="font-semibold text-brown-900">
                      $95 / person
                    </span>
                  </li>
                  <li className="flex items-center justify-between rounded-full bg-cream-100 px-4 py-2">
                    <span>Wine Pairing add-on</span>
                    <span className="font-semibold text-brown-900">
                      +$35
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between border-t border-cream-200 bg-cream-50 px-10 py-6">
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-brown-500">
                  New dates monthly
                </span>
                <Link
                  href="#visit"
                  className="text-sm font-semibold text-pink-500 transition hover:text-pink-400"
                >
                  Request invitation →
                </Link>
              </div>
            </div>
            <div className="rounded-4xl border border-cream-200 bg-white/90 p-10 shadow-xl shadow-pink-200/30">
              <h3 className="text-2xl font-semibold text-brown-950">
                Signature Sundae Workshop
              </h3>
              <p className="mt-4 text-sm text-brown-700">
                Build your dream sundae with guidance from our pastry team. For
                families, birthday celebrations, and team socials.
              </p>
              <div className="mt-8 space-y-4 text-sm text-brown-700">
                <div className="rounded-3xl border border-cream-200 bg-cream-50 px-4 py-3">
                  Includes house-made toppings, cookie crumble lab, and take-home
                  pint kit.
                </div>
                <div className="rounded-3xl border border-cream-200 bg-cream-50 px-4 py-3">
                  We can accommodate dairy-free, nut-free, and gluten-free guests.
                </div>
                <div className="rounded-3xl border border-cream-200 bg-cream-50 px-4 py-3">
                  Available Wednesday–Sunday · Afternoon & Sunset sessions.
                </div>
              </div>
              <Link
                href="#visit"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400"
              >
                Plan your workshop
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-pink-50/60 py-24 sm:py-28">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
            <div className="lg:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-pink-500">
                Scoop Stories
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brown-950 sm:text-4xl">
                Loved by taste dreamers everywhere.
              </h2>
              <p className="mt-4 text-sm text-brown-700">
                We chase texture, joy, and nostalgia in equal measure. Our
                community keeps us churning and experimenting.
              </p>
            </div>
            <div className="grid flex-1 gap-6 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-pink-100 bg-white/80 p-6 shadow-lg shadow-pink-200/20"
                >
                  <p className="text-sm text-brown-700">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-brown-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.4em] text-brown-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="visit"
          className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28"
        >
          <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-pink-100/60 via-cream-100 to-tangerine-100/60 blur-3xl" />
          <div className="rounded-4xl border border-cream-200 bg-white/90 p-10 shadow-2xl shadow-pink-200/50">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-pink-500">
                  Visit Us
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-brown-950 sm:text-4xl">
                  Step into the Sundae Society lounge.
                </h2>
                <p className="mt-4 text-sm text-brown-700">
                  241 Magnolia Avenue, Suite B · Open Wednesday – Sunday 12 PM –
                  10 PM. Walk-ins welcome, tastings by reservation only.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-cream-200 bg-cream-50 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-brown-500">
                      Hotline
                    </p>
                    <p className="text-lg font-semibold text-brown-900">
                      (323) 555-0142
                    </p>
                  </div>
                  <div className="rounded-3xl border border-cream-200 bg-cream-50 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-brown-500">
                      Email
                    </p>
                    <p className="text-lg font-semibold text-brown-900">
                      hello@sundaesociety.com
                    </p>
                  </div>
                </div>
              </div>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-brown-700">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-brown-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-brown-700">
                    Email
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-brown-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-brown-700">
                  Reservation date
                  <input
                    type="date"
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-brown-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-brown-700">
                  How can we make it magical?
                  <textarea
                    placeholder="Let us know the occasion, dietary notes, or a dream flavor."
                    rows={4}
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-brown-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brown-900 px-8 py-3 text-sm font-semibold text-cream-50 shadow-lg shadow-brown-900/30 transition hover:bg-brown-800"
                >
                  Request a tasting
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cream-200 bg-cream-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-brown-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sundae Society. Churned with love.</p>
          <div className="flex flex-wrap gap-6">
            <Link className="transition hover:text-pink-500" href="#flavors">
              Seasonal Menu
            </Link>
            <Link className="transition hover:text-pink-500" href="#events">
              Events
            </Link>
            <Link className="transition hover:text-pink-500" href="#visit">
              Contact
            </Link>
            <Link className="transition hover:text-pink-500" href="#">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
