import { H1, H2, InternalLink, P } from "components/content";

export const metadata = {
  title: "Privacy Policy - Noteswiki",
  alternates: {
    canonical: `${process.env.BASE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <H1 styles="text-center">Privacy Policy</H1>
      <P>
        Welcome to NotesWiki! Your privacy is important to us, and we are
        committed to protecting it. This Privacy Policy outlines the type of
        information we may collect and how we handle it. By using our website,
        you agree to the terms described below.
      </P>
      <P>
        <strong>1. Information We Collect</strong>
        <br />
        At NotesWiki, we do not collect or store any personal information from
        our users. You can browse, download, and use the resources provided
        without creating an account or providing any identifiable data.
      </P>
      <P>
        <strong>2. Third-Party Content</strong>
        <br />
        Some of the PDF notes shared on NotesWiki may be created by third-party
        contributors. We review these contributions to ensure quality but are
        not responsible for the content's accuracy, legality, or compliance with
        third-party privacy practices.
      </P>
      <P>
        <strong>3. Cookies</strong>
        <br />
        We do not use cookies or other tracking technologies to collect user
        data. However, third-party services integrated into our website (e.g.,
        analytics tools, ad networks) may use cookies. You can manage your
        cookie preferences through your browser settings.
      </P>
      <P>
        <strong>4. Third-Party Links</strong>
        <br />
        NotesWiki may contain links to third-party websites. Please note that we
        are not responsible for the privacy practices or content of these
        external sites. We encourage you to review their privacy policies when
        visiting them.
      </P>
      <P>
        <strong>5. Downloadable Files</strong>
        <br />
        The PDF files available on NotesWiki are provided as-is for educational
        purposes. While we strive to ensure all files are safe, we recommend
        scanning them with antivirus software before use.
      </P>
      <P>
        <strong>6. Changes to This Policy</strong>
        <br />
        We reserve the right to update this Privacy Policy at any time. Any
        changes will be posted on this page, and the effective date will be
        updated accordingly.
      </P>
      <P>
        <strong>7. Contact Us</strong>
        <br />
        If you have any questions or concerns about this Privacy Policy, please
        contact us at: contact@noteswiki.com
      </P>
    </>
  );
}
