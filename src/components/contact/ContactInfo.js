import {
  Dribbble,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-midnight h-fit w-full space-y-6 rounded-xl p-6 text-white md:w-fit">
      <h2 className="text-xl font-bold">Get in Touch</h2>

      <div className="flex items-start gap-4">
        <div className="bg-purple-overlay w-fit rounded-full p-3.5">
          <Mail size={20} className="text-lavender" />
        </div>
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-charcoal mt-2 text-sm">
            support@languageplatform.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-purple-overlay w-fit rounded-full p-3.5">
          <Phone size={20} className="text-lavender" />
        </div>
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-charcoal mt-2 text-sm">
            support@languageplatform.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-purple-overlay w-fit rounded-full p-3.5">
          <MapPin size={20} className="text-lavender" />
        </div>
        <div>
          <h3 className="font-medium">Office</h3>
          <p className="text-charcoal mt-2 text-sm">
            support@languageplatform.com
          </p>
        </div>
      </div>

      <div>
        <h3 className="mt-9 font-medium">Office</h3>

        <div className="mt-[18px] flex items-center gap-4">
          <div className="bg-purple-overlay w-fit rounded-full p-2.5">
            <Facebook size={20} className="text-lavender" />
          </div>
          <div className="bg-purple-overlay w-fit rounded-full p-2.5">
            <Twitter size={20} className="text-lavender" />
          </div>
          <div className="bg-purple-overlay w-fit rounded-full p-2.5">
            <Instagram size={20} className="text-lavender" />
          </div>
          <div className="bg-purple-overlay w-fit rounded-full p-2.5">
            <Dribbble size={20} className="text-lavender" />
          </div>
        </div>
      </div>
    </div>
  );
}
