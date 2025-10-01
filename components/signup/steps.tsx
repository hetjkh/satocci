// components/StepsClipPath.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

export default function StepsClipPath() {
  const steps = [
    {
      title: "CONTACT US",
      text:
        "Fill in the form below to tell us more about your store, your customers, and how you operate.",
      cta: "Contact Us",
      badge: "Step 1",
      badgeClass: "badge--green",
    },
    {
      title: "ONBOARDING PROCESS",
      text:
        "Team Satocci will ensure your inventories are in sync and that your team is trained to start accepting shoppers in less than two weeks.",
      cta: null,
      badge: "Step 2",
      badgeClass: "badge--purple",
    },
    {
      title: "CONTINUOUS IMPROVEMENT",
      text:
        "We work closely with your team after launch—gathering feedback, adding features, and ensuring checkout remains smooth.",
      cta: null,
      badge: "Step 3",
      badgeClass: "badge--green",
    },
  ];

  return (
    <section className="bg-background px-6 md:px-16 py-16">
      <div className="max-w-[1200px] mx-auto grid gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <article key={i} className="relative">
            <div className="step-card">
              <h3 className="text-2xl font-extrabold mb-4">{s.title}</h3>
              <p className="text-base text-muted-foreground mb-6">{s.text}</p>

              {s.cta && (
                <Link href="#contact" className="inline-block">
                  <Button variant="outline" className="rounded-full px-6 py-2">
                    {s.cta}
                  </Button>
                </Link>
              )}
            </div>

            <div className={`badge ${s.badgeClass}`}>{s.badge}</div>
          </article>
        ))}
      </div>

      <style jsx>{`
        /* Fallback rounded rect for environments that don't support path() */
        .step-card {
          background: var(--card);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 1rem;
          padding: 2rem;
          min-height: 260px;
          box-shadow: 0 6px 18px rgba(10, 10, 10, 0.06);
          /* sensible fallback (rounded rect) - put FIRST so it's used in older browsers */
          -webkit-clip-path: inset(0 round 1rem);
          clip-path: inset(0 round 1rem);
          /* then override with precise custom path (single-line string, no line breaks) */
          -webkit-clip-path: path("M0 0 H100% V100% H36% C30% 100% 24% 96% 20% 92% C14% 86% 10% 78% 10% 68% C10% 58% 13% 52% 20% 48% L22% 47% C14% 44% 8% 40% 0 34% V0 Z");
          clip-path: path("M0 0 H100% V100% H36% C30% 100% 24% 96% 20% 92% C14% 86% 10% 78% 10% 68% C10% 58% 13% 52% 20% 48% L22% 47% C14% 44% 8% 40% 0 34% V0 Z");
        }

        /* Badge that sits overlapping the notch */
        .badge {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -18px;
          min-width: 110px;
          padding: 8px 20px;
          border-radius: 999px;
          font-weight: 600;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
          text-align: center;
          font-size: 0.9rem;
        }

        .badge--green {
          background: #2ff08a;
          color: #061317;
        }
        .badge--purple {
          background: #6e2dd7;
          color: white;
        }

        /* Responsive tweak: make notch proportionally larger on small screens */
        @media (max-width: 880px) {
          .step-card {
            -webkit-clip-path: path("M0 0 H100% V100% H42% C36% 100% 30% 96% 26% 92% C18% 86% 14% 78% 14% 68% C14% 58% 18% 52% 26% 48% L28% 47% C18% 44% 8% 40% 0 34% V0 Z");
            clip-path: path("M0 0 H100% V100% H42% C36% 100% 30% 96% 26% 92% C18% 86% 14% 78% 14% 68% C14% 58% 18% 52% 26% 48% L28% 47% C18% 44% 8% 40% 0 34% V0 Z");
          }
          .badge {
            bottom: -16px;
            min-width: 96px;
            padding: 6px 16px;
          }
        }
      `}</style>
    </section>
  );
}
