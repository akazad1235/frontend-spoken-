import InputField from "@/ui/InputField";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-midnight flex-1 rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold">Send us a Message</h2>

      <form className="mt-6 space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <InputField
            label="First Name"
            id="firstName"
            name="firstName"
            placeholder="John"
          />

          <InputField
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
        </div>

        <InputField
          label="Email Address"
          id="email"
          name="email"
          placeholder="you@example.com"
        />

        <InputField
          label="Subject"
          id="subject"
          name="subject"
          placeholder="How can we help you?"
        />

        <div className="flex w-full flex-col gap-2.5">
          <label htmlFor="message" className="text-xs font-medium">
            Message
          </label>

          <textarea
            rows={5}
            id="message"
            name="message"
            placeholder="Your message..."
            className="bg-navy focus:border-lavender focus:ring-lavender/20 border-border text-muted rounded-md border p-3 transition-colors outline-none focus:ring-2"
          />
        </div>

        <button
          type="submit"
          className="bg-purple inline-flex cursor-pointer items-center gap-2 rounded-md px-6 py-3.5 text-sm text-white"
        >
          <Send size={18} /> Send Message
        </button>
      </form>
    </div>
  );
}
