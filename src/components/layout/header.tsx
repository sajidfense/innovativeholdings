"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navigation, services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceLinks = services.slice(0, 6);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter nav items for desktop display (exclude duplicates)
  const desktopNav = navigation.filter((item) =>
    ["Services", "Case Studies", "Industries", "Insights", "About"].includes(item.name)
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-navy/95 backdrop-blur-md border-b border-white/8 shadow-nav"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
          style={{ height: "var(--header-height, 72px)" }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 py-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              {/* Logo mark */}
              <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
                <span className="font-display text-sm font-bold text-white">IH</span>
              </div>
              <span
                className={cn(
                  "font-display text-base font-semibold tracking-tight transition-colors duration-300",
                  scrolled ? "text-white" : "text-white"
                )}
              >
                Innovative Holdings
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {desktopNav.map((item) =>
              item.name === "Services" ? (
                <div key={item.name} className="relative">
                  <button
                    className={cn(
                      "group flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                      scrolled
                        ? "text-slate-300 hover:text-white hover:bg-white/8"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>

                  {/* Mega menu dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute left-1/2 top-full mt-2 w-[520px] -translate-x-1/2 rounded-2xl border border-white/10 bg-navy-light/95 p-6 shadow-elevation-4 backdrop-blur-xl"
                      >
                        <p className="mb-4 text-label-sm font-medium uppercase tracking-widest text-slate-500">
                          Our Services
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.id}
                              href={service.href}
                              className="group rounded-xl p-3 transition-colors hover:bg-white/6"
                              onClick={() => setServicesOpen(false)}
                            >
                              <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                                {service.title}
                              </p>
                              <p className="mt-0.5 text-xs text-slate-400 clamp-2">
                                {service.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 border-t border-white/8 pt-4">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            View all services
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                    scrolled
                      ? "text-slate-300 hover:text-white hover:bg-white/8"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                scrolled ? "text-slate-300 hover:text-white" : "text-white/80 hover:text-white"
              )}
            >
              Contact
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-accent hover:bg-accent-hover text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
            >
              <Link href="/contact#consultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden rounded-lg p-2 transition-colors duration-200",
              scrolled ? "text-white hover:bg-white/10" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-80 border-l border-white/8 bg-navy-light/95 px-6 py-8 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-sm font-semibold text-white">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <nav className="space-y-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/8 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      <ArrowRight className="h-4 w-4 opacity-30" aria-hidden />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 space-y-3 border-t border-white/8 pt-8">
                <Button asChild className="w-full bg-accent hover:bg-accent-hover text-white">
                  <Link href="/contact#consultation" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
