import { H1, ExternalLink, P } from "components/content";

export const metadata = {
  title: "About - Noteswiki",
  alternates: {
    canonical: `${process.env.BASE_URL}/about`,
  },
};

export default function AboutUs() {
  return (
    <>
      <H1 styles="text-center">About NotesWiki</H1>
      <P>
        Welcome to NotesWiki, your ultimate destination for free, high-quality
        PDF notes! At NotesWiki, we believe in making learning resources
        accessible to everyone. Whether you're a student, professional, or
        lifelong learner, our platform offers a wide range of notes to support
        your educational journey.
      </P>
      <P>
        NotesWiki was founded with the mission to share knowledge and simplify
        learning. The notes on our platform are created by us and contributed by
        third-party users who are passionate about education. We aim to provide
        reliable, well-organized, and easy-to-understand content to help you
        excel in your studies or field of interest.
      </P>
      <P>
        What makes NotesWiki unique is our simplicity. There's no need for
        logins, subscriptions, or personal information. Just explore, download,
        and learn at your convenience.
      </P>
      <P>
        We are committed to ensuring that all content is safe, accurate, and
        beneficial. However, if you find any discrepancies or have suggestions,
        we encourage you to reach out to us.
      </P>
      <P>
        Thank you for choosing NotesWiki as your learning companion. Together,
        let's make knowledge sharing and access easier for everyone.
      </P>
      <P>
        If you have any questions, feedback, or ideas to share, feel free to
        contact us at: contact@noteswiki.com
      </P>
    </>
  );
}
