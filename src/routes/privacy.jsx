import { BsFileTextFill } from 'solid-icons/bs';
import PageLayout from '~/components/PageLayout';

export default function Privacy() {
  return (
    <PageLayout>
      <div class="flex flex-col items-center gap-5">
        <h1 class="text-2xl md:text-4xl font-bold flex items-center gap-3">
          <BsFileTextFill class="text-xl md:text-3xl" />
          Privacy Policy
        </h1>

        <div class="w-full max-w-2xl">
          <div class="prose prose-invert mx-auto">
            <p>
              By using the website, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
            <br />
            <p>
              This website is hosted on GitHub Pages, which may collect some data.
              See <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" class="text-white underline hover:text-white/80">
                this page</a> for details on GitHub Pages data collection
              and <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" class="text-white underline hover:text-white/80">
                this page</a> for GitHub's General Privacy Statement.
            </p>
            <br />
            <p>
              This website may contain links to other websites that are not operated by us.
              If you click on such links, you will be directed to that third party's site.
              We strongly advise you to review the Privacy Policy of every site you visit.
              We have no control over and assume no responsibility for the content,
              privacy policies or practices of any third party sites or services.
            </p>
            <br />
            <p>
              This website does not set cookies of any type, does not use any third-party resources/assets,
              does not employ any trackers and is viewable without JavaScript.
            </p>
            <br />
            <p>
              We may change this Privacy Policy from time to time.
              You are advised to review this Privacy Policy periodically for any changes.
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <br />
            <p>
              If you have any questions, don't hesitate to send an email to <a href="mailto:foundation@nixos.org" class="text-white underline hover:text-white/80">
                foundation@nixos.org</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
