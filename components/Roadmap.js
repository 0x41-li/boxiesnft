/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Invite team members",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "List view",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Calendars",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Notifications",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
];

export default function Example() {
  return (
    <div className="bg-bggray pt-20">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
        ROADMAP
      </h2>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pt-24 lg:pb-12 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
        <div>
          <h2 className="text-base font-semibold text-bgred uppercase tracking-wide">
            Pre-Launch
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Phase #1</p>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="bg-bgred h-1"></div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
        <div>
          <h2 className="text-base font-semibold text-bgred uppercase tracking-wide">
            Post-Launch
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Phase #2</p>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
