import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact AI Hub Agency | HIPAA Cyber Risk Pre-Assessment",
  description: "Request a HIPAA Cyber Risk Pre-Assessment or ask about AI Hub Sentinel cybersecurity visibility for medical and dental practices.",
};

export default function Contact() {
  return <ContactPageClient />;
}
