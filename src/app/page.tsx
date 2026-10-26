"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { PageContainer } from "@/components/layout/PageContainer";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { siteConfig } from "@/data/profile";

export default function Home() {
  return (
    <div className="py-20 md:py-28">
      <PageContainer>
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          {/* Telemetry Badge */}
          <StatusBadge status={siteConfig.status.label} detail={siteConfig.status.detail} />

          {/* Section Header Preview */}
          <SectionHeader
            align="center"
            eyebrow="ENGINEERING WORKBENCH"
            title="Building typed, scalable systems with architectural discipline."
            description="Personal developer portfolio exploring modern full-stack engineering, performance optimization, and clean software architecture."
          />

          {/* Core Layout Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/projects">
              <Button
                size="md"
                className="bg-accent-sky text-accent-sky-foreground hover:bg-accent-sky-hover font-medium px-6"
              >
                Explore Projects
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="md"
                variant="outline"
                className="border-border-subtle hover:bg-bg-elevated text-text-primary font-medium px-6"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Milestone Note */}
          <div className="mt-8 p-4 rounded-xl border border-border-subtle bg-bg-secondary/60 text-xs font-mono text-text-muted max-w-md">
            <span>[MILESTONE 3 FOUNDATION ACTIVE] Layout, Theme Engine & Design Tokens Established.</span>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
