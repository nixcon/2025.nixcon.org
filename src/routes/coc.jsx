import { BsFileTextFill } from '@aminya/solid-icons/bs/BsFileTextFill';
import PageLayout from '~/components/PageLayout';

export default function CodeOfConduct() {
  const cubContainerClasses = "p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors";
  const mainSectionTitleClasses = "text-2xl font-bold mb-6 text-center"; // For H2s not in containers
  const principleHeadingClasses = "text-xl font-bold mb-3"; // For H3s within principle containers
  const listClasses = "list-disc list-inside space-y-2"; // Removed mb-4 as container provides bottom padding

  return (
    <PageLayout>
      <div class="flex flex-col items-center gap-8">
        <h1 class="text-2xl md:text-4xl font-bold flex items-center gap-3">
          <BsFileTextFill class="text-xl md:text-3xl" />
          Code of Conduct
        </h1>

        <div class="w-full max-w-3xl space-y-6">

          <div class={cubContainerClasses}>
            <p class="font-semibold text-lg mb-2">NixCon 2025 - Code of Conduct</p>
            <p class="text-sm mb-2">Last updated: May 29, 2025</p>
            <p>This Code of Conduct outlines our expectations for all participants at NixCon. We are committed to providing a respectful and inclusive experience for everyone.</p>
          </div>

          <h2 class={mainSectionTitleClasses}>Core Principles</h2>

          <div class={cubContainerClasses}>
            <h3 class={principleHeadingClasses}>1. Respectful Interaction</h3>
            <ul class={listClasses}>
              <li>Encounter everyone with as little bias as possible.</li>
              <li>Act considerately and respectfully towards others, their needs, and boundaries. This includes respecting personal space, listening attentively, and refraining from interrupting.</li>
              <li>Use gender-neutral ways of addressing people by default. Only use pronouns when you know which pronouns (if any) an individual prefers. Ask respectfully how others wish to be addressed. Respect preferences for names only or no pronouns. Support others in using correct pronouns.</li>
            </ul>
          </div>

          <div class={cubContainerClasses}>
            <h3 class={principleHeadingClasses}>2. Personal Responsibility & Consent:</h3>
            <ul class={listClasses}>
              <li>Take responsibility for your own wellbeing and look after your needs. You can leave any conversation or situation at any time if you feel uncomfortable.</li>
              <li>Only take pictures or record individuals after obtaining their explicit consent.</li>
            </ul>
          </div>

          <div class={cubContainerClasses}>
            <h3 class={principleHeadingClasses}>3. Openness & Support:</h3>
            <ul class={listClasses}>
              <li>If you are unsure if your behaviour is acceptable, ask. Boundaries and discrimination are defined by those who experience them.</li>
              <li>Approach conflicts or differences of opinion with openness, curiosity, and a willingness to listen.</li>
              <li>If someone asks for your support or if you notice something concerning, offer support if appropriate, but respect their wishes. Alert event staff if necessary.</li>
              <li>You are not alone. Ask for help or advice from event staff when you don&apos;t know what to do.</li>
            </ul>
          </div>

          <div class={cubContainerClasses}>
            <h3 class={principleHeadingClasses}>4. Accountability & Learning:</h3>
            <ul class={listClasses}>
              <li>Apologize when you make mistakes and be open to criticism and feedback. View feedback as an opportunity to learn.</li>
            </ul>
          </div>

          <div class={cubContainerClasses}>
            <h3 class={principleHeadingClasses}>5. Respect for the Environment</h3>
            <ul class={listClasses}>
              <li>Respect the event venue and any specific rules it may have. Help keep shared spaces tidy.</li>
            </ul>
          </div>

          <h2 class={mainSectionTitleClasses}>Reporting & Assistance:</h2>
          <div class={cubContainerClasses}>
            <p class="mb-2">If you experience or witness behavior that violates this Code of Conduct, or if you need assistance for any reason:</p>
            <ul class={listClasses}>
              <li>Please contact event organizers or designated support staff.</li>
              <li>All reports will be treated with discretion. Event organizers are empowered to take appropriate actions in response to violations.</li>
            </ul>
          </div>

          <h2 class={mainSectionTitleClasses}>Adaptation</h2>
          <div class={cubContainerClasses}>
            <p>This Code of Conduct is adapted from the NixCon 2024 Code of Conduct and the bUm Code of Conduct.</p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}