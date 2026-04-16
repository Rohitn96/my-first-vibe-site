import { FadeInOnScroll } from "@/components/fade-in-on-scroll";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <FadeInOnScroll>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">About</h1>
          <p className="max-w-2xl text-zinc-300">
            We’re a Finnish Bitcoin company focused on building practical tools, communities, and
            education. This show is where we explain the “why” behind Bitcoin — in a Nordic, no-fluff
            way.
          </p>
        </FadeInOnScroll>
      </section>

      <section className="space-y-4">
        <FadeInOnScroll>
          <h2 className="text-lg font-semibold text-zinc-100">Hosts</h2>
          <div className="space-y-3 text-zinc-300">
            <p>
              <span className="text-zinc-100">Host A</span> — building on Bitcoin, talking about
              startups and real-world adoption.
            </p>
            <p>
              <span className="text-zinc-100">Host B</span> — research, privacy, and culture: making
              complex topics feel simple.
            </p>
          </div>
        </FadeInOnScroll>
      </section>

      <section className="space-y-4">
        <FadeInOnScroll>
          <h2 className="text-lg font-semibold text-zinc-100">What you’ll hear</h2>
          <p className="text-zinc-300">
            Conversations about Bitcoin in Finland, education for newcomers, privacy and custody
            basics, and stories from builders and communities.
          </p>
        </FadeInOnScroll>
      </section>
    </div>
  );
}

