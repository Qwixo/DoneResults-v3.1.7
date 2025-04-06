import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "~5% Average Reply Rate",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            INTERESTING FACT - Industry standard is ~1%
          </p>
          <div className="flex flex-col space-y-4">
            <img
              src="https://i.imgur.com/bv8vfIZ.png"
              alt="Reply rate example 1"
              className="rounded-lg object-cover w-full shadow"
            />
            <img
              src="https://i.imgur.com/Qu8S6yM.png"
              alt="Reply rate example 2"
              className="rounded-lg object-cover w-full shadow"
            />
            <img
              src="https://i.imgur.com/0LTgVSt.png"
              alt="Reply rate example 3"
              className="rounded-lg object-cover w-full shadow"
            />
            <img
              src="https://i.imgur.com/sHYnNvb.png"
              alt="Reply rate example 4"
              className="rounded-lg object-cover w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "~30% Opportunity Rate",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            Meaning on average 30% of the replies are positive — people who want to hear what you have to offer
          </p>
          <div className="flex flex-col space-y-4">
            <img
              src="https://i.imgur.com/Rr8ZnaK.png"
              alt="Opportunity rate example 1"
              className="rounded-lg object-cover w-full shadow"
            />
            <img
              src="https://i.imgur.com/LTicAGD.png"
              alt="Opportunity rate example 2"
              className="rounded-lg object-cover w-full shadow"
            />
            <img
              src="https://i.imgur.com/mNlfmeV.png"
              alt="Opportunity rate example 3"
              className="rounded-lg object-cover w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Real People",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            "These aren't just numbers — they're real people."
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            10+ potential clients booked calls in one week. All from cold outreach.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            We scale the volume based on your goals — 2, 10, 50… it's up to you.
          </p>
          <div className="flex flex-col space-y-4">
            <img
              src="https://i.imgur.com/FRXyef4.png"
              alt="Real people results"
              className="rounded-lg object-cover w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Scalable & Controllable",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            We can fully adapt the campaign volume to your team's capacity.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            Whether you want 2 leads a week or 20, we can dial the outreach up or down to fit your calendar. No overload, no stress.
          </p>
          <div className="flex flex-col space-y-4">
            <img
              src="https://i.imgur.com/sr2wCLu.png"
              alt="Scalable and controllable"
              className="rounded-lg object-cover w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Case Study B2B Language School",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            B2B Language School Campaign for Volis Academy
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            960 emails sent, 90 replies (9.4% reply rate), 10 new valuable leads.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-xl font-normal">
            Campaign paused after 2 days due to too many replies (will be resuming soon).
          </p>
          <div className="flex flex-col space-y-4">
            <img
              src="https://i.imgur.com/JYiZ9nW.png"
              alt="B2B Language School case study"
              className="rounded-lg object-cover w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="relative top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
