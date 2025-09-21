"use client";
import { Card } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

export default function MissionVision() {
  return (
    <section aria-labelledby="mv">
      <h2 id="mv" className="font-display text-3xl md:text-4xl font-semibold mb-6">Mission & Vision</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-6 h-6 text-[var(--mb-primary-2)]" />
            <h3 className="text-xl md:text-2xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-[var(--mb-muted)]">
            Transform sports operations through technology that simplifies management and empowers growth.
          </p>
        </Card>
        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="w-6 h-6 text-[var(--mb-primary)]" />
            <h3 className="text-xl md:text-2xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-[var(--mb-muted)]">Be the #1 sports-tech partner in the Gulf &amp; MENA region.</p>
        </Card>
      </div>
    </section>
  );
}








