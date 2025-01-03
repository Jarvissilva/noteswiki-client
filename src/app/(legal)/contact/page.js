import { ExternalLink, H1, P } from "components/content";

export const metadata = {
  title: "Contact - Noteswiki",
  alternates: {
    canonical: `${process.env.BASE_URL}/contact`,
  },
};

export default function ContactUs() {
  return (
    <>
      <H1 styles="text-center">Contact Us</H1>
      <P>
        If you have face any issues on our website or have queries then feel
        free to contact us at: contact@noteswiki.com{" "}
      </P>
    </>
  );
}
