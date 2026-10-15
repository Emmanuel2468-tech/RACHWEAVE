
import {
  FiImage,
  FiMessageCircle,
  FiCalendar,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Choose Your Style",
    description: "Browse the gallery and find your preferred look.",
    icon: FiImage,
  },
  {
    number: "02",
    title: "Send a Message",
    description: "Tell the stylist which hairstyle you want.",
    icon: FiMessageCircle,
  },
  {
    number: "03",
    title: "Confirm Your Appointment",
    description: "Agree on the price, date, time, and location.",
    icon: FiCalendar,
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[3px] text-gold">
            SIMPLE AND CONVENIENT
          </p>
          <h2 className="font-display text-4xl text-charcoal sm:text-5xl">
            How to Book
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-500">
            Getting your dream hairstyle is just a few steps away.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-beige text-2xl text-brown">
                  <Icon />
                </div>

                <p className="mt-5 text-xs tracking-[2px] text-gold">
                  STEP {step.number}
                </p>

                <h3 className="mt-2 font-display text-xl text-charcoal">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-stone-500">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
