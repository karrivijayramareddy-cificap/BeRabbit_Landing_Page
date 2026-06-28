"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    formData.append("subject", "New Contact Message - BeRabbit");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      form.reset();
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="fluid-container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-primary">
              BeRabbit
            </h2>

            <p className="text-sm text-foreground/70 leading-6">
              Bridging the gap between education and employment for the next
              generation of engineers.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading">Platform</h4>

            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Students
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Placement Cells
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Businesses
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading">Company</h4>

            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h4 className="font-semibold font-heading">Contact Us</h4>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-white/50"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-white/50"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full rounded-md border border-input bg-white/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Send Message
              </Button>

              {result && (
                <p className="text-sm text-foreground/70">{result}</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/50">
          <p>
            © {new Date().getFullYear()} BeRabbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
