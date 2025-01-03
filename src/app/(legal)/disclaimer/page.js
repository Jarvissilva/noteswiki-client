import { H1, P } from "components/content";

export const metadata = {
  title: "Disclaimer - Noteswiki",
  alternates: {
    canonical: `${process.env.BASE_URL}/disclaimer`,
  },
};

export default function Disclaimer() {
  return (
    <>
      <H1 styles="text-center">Disclaimer</H1>
      <P>
        The information provided on NotesWiki is for general informational and
        educational purposes only. While we strive to ensure the accuracy and
        reliability of the content, we make no guarantees or warranties, express
        or implied, about the completeness, accuracy, reliability, or
        suitability of the information provided.
      </P>
      <P>
        The PDF notes available for download on NotesWiki are offered "as-is."
        They may include contributions from third-party users. We do not accept
        responsibility for errors, omissions, or any issues arising from the use
        of these materials. We strongly recommend verifying the accuracy and
        relevance of the content to your specific needs.
      </P>
      <P>
        <strong>Third-Party Contributions:</strong>
        <br />
        Some notes are submitted by third-party contributors. While we make
        every effort to review and curate this content, we cannot guarantee its
        quality, legality, or compliance with copyright laws. If you believe any
        content infringes on intellectual property rights or contains
        inappropriate material, please notify us immediately for review and
        action.
      </P>
      <P>
        <strong>External Links:</strong>
        <br />
        NotesWiki may include links to external websites for additional
        resources or references. These links are provided for convenience, and
        we do not endorse or take responsibility for the content, privacy
        policies, or practices of external sites.
      </P>
      <P>
        <strong>Use at Your Own Risk:</strong>
        <br />
        The use of NotesWiki and the materials provided is entirely at your own
        risk. We are not liable for any direct, indirect, incidental, or
        consequential damages arising from the use or inability to use the
        content or services offered on our platform.
      </P>
      <P>
        <strong>Changes to This Disclaimer:</strong>
        <br />
        We reserve the right to update or modify this Disclaimer at any time
        without prior notice. Any changes will be effective immediately upon
        posting on this page.
      </P>
      <P>
        If you have any questions or concerns regarding this Disclaimer, please
        contact us at: contact@noteswiki.com
      </P>
    </>
  );
}
