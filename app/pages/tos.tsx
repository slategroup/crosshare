import Head from 'next/head';
import { DefaultTopBar } from '../components/TopBar.js';
import { withStaticTranslation } from '../lib/translation.js';

export const getStaticProps = withStaticTranslation(() => {
  return { props: {} };
});

export default function TOSPage() {
  return (
    <>
      <Head>
        <title>{`Terms of Service | Crosshare Crossword Constructor and Puzzles`}</title>
      </Head>
      <DefaultTopBar />
      <h2>Crosshare Terms of Service</h2>
      <p>1. Terms</p>
      <p>
        By accessing the website at https://crosshare.org, you are agreeing to
        be bound by these terms of service, all applicable laws and regulations,
        and agree that you are responsible for compliance with any applicable
        local laws. If you do not agree with any of these terms, you are
        prohibited from using or accessing this site. The materials contained in
        this website are protected by applicable copyright and trademark law.
      </p>
      <p>2. Use License</p>
      <p>
        Permission is granted to temporarily download one copy of the materials
        (information or software) on Crosshare&apos;s website for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license you may not:
      </p>
      <p>- modify or copy the materials;</p>
      <p>
        - use the materials for any commercial purpose, or for any public
        display (commercial or non-commercial);
      </p>
      <p>
        - attempt to decompile or reverse engineer any software contained on
        Crosshare&apos;s website;
      </p>
      <p>
        - remove any copyright or other proprietary notations from the
        materials; or
      </p>
      <p>
        - transfer the materials to another person or &quot;mirror&quot; the
        materials on any other server.
      </p>
      <p>
        This license shall automatically terminate if you violate any of these
        restrictions and may be terminated by Crosshare at any time. Upon
        terminating your viewing of these materials or upon the termination of
        this license, you must destroy any downloaded materials in your
        possession whether in electronic or printed format.
      </p>
      <p>3. Disclaimer</p>
      <p>
        The materials on Crosshare&apos;s website are provided on an &apos;as
        is&apos; basis. Crosshare makes no warranties, expressed or implied, and
        hereby disclaims and negates all other warranties including, without
        limitation, implied warranties or conditions of merchantability, fitness
        for a particular purpose, or non-infringement of intellectual property
        or other violation of rights.
      </p>
      <p>
        Further, Crosshare does not warrant or make any representations
        concerning the accuracy, likely results, or reliability of the use of
        the materials on its website or otherwise relating to such materials or
        on any sites linked to this site.
      </p>
      <p>4. Limitations</p>
      <p>
        In no event shall Crosshare or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to use
        the materials on Crosshare&apos;s website, even if Crosshare or a
        Crosshare authorized representative has been notified orally or in
        writing of the possibility of such damage. Because some jurisdictions do
        not allow limitations on implied warranties, or limitations of liability
        for consequential or incidental damages, these limitations may not apply
        to you.
      </p>
      <p>5. Accuracy of materials</p>
      <p>
        The materials appearing on Crosshare&apos;s website could include
        technical, typographical, or photographic errors. Crosshare does not
        warrant that any of the materials on its website are accurate, complete
        or current. Crosshare may make changes to the materials contained on its
        website at any time without notice. However Crosshare does not make any
        commitment to update the materials.
      </p>
      <p>6. Links</p>
      <p>
        Crosshare has not reviewed all of the sites linked to its website and is
        not responsible for the contents of any such linked site. The inclusion
        of any link does not imply endorsement by Crosshare of the site. Use of
        any such linked website is at the user&apos;s own risk.
      </p>
      <p>7. Modifications</p>
      <p>
        Crosshare may revise these terms of service for its website at any time
        without notice. By using this website you are agreeing to be bound by
        the then current version of these terms of service.
      </p>
      <p>8. Governing Law</p>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of New York and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>
    </>
  );
}
