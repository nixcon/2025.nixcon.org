import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SubTitle, Title } from "~/components/Ui"

export default function CodeOfConduct() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <Title>Code of Conduct</Title>

        <Section title="NixCon 2025 - Code of Conduct">
          <Paragraph>
            This Code of Conduct is still subject to change. Check back here for the latest version. Last update: May
            29, 2025.
          </Paragraph>
          <Paragraph>
            This Code of Conduct outlines our expectations for all participants at NixCon. We are committed to providing
            a respectful and inclusive experience for everyone.
          </Paragraph>
        </Section>

        <Section title="Core Principles">
          <SubTitle>1. Respectful Interaction</SubTitle>
          <Paragraph>Encounter everyone with as little bias as possible.</Paragraph>
          <Paragraph>
            Act considerately and respectfully towards others, their needs, and boundaries. This includes respecting
            personal space, listening attentively, and refraining from interrupting.
          </Paragraph>
          <Paragraph>
            Use gender-neutral ways of addressing people by default. Only use pronouns when you know which pronouns (if
            any) an individual prefers. Ask respectfully how others wish to be addressed. Respect preferences for names
            only or no pronouns. Support others in using correct pronouns.
          </Paragraph>

          <SubTitle>2. Personal Responsibility & Consent</SubTitle>
          <Paragraph>
            Take responsibility for your own wellbeing and look after your needs. You can leave any conversation or
            situation at any time if you feel uncomfortable.
          </Paragraph>
          <Paragraph>Do not photograph or record individuals that are wearing a red lanyard.
            If a person wearing a red lanyard appears in a crowd photo, either choose a different photo or
            edit the photo to make the person and their badge unrecognisable.</Paragraph>
          <SubTitle>3. Openness & Support</SubTitle>
          <Paragraph>
            If you are unsure if your behaviour is acceptable, ask. Boundaries and discrimination are defined by those
            who experience them.
          </Paragraph>
          <Paragraph>
            Approach conflicts or differences of opinion with openness, curiosity, and a willingness to listen.
          </Paragraph>
          <Paragraph>
            If someone asks for your support or if you notice something concerning, offer support if appropriate, but
            respect their wishes. Alert event staff if necessary.
          </Paragraph>
          <Paragraph>
            You are not alone. Ask for help or advice from event staff when you don't know what to do.
          </Paragraph>

          <SubTitle>4. Accountability & Learning</SubTitle>
          <Paragraph>
            Apologize when you make mistakes and be open to criticism and feedback. View feedback as an opportunity to
            learn.
          </Paragraph>

          <SubTitle>5. Respect for the Environment</SubTitle>
          <Paragraph>
            Respect the event venue and any specific rules it may have. Help keep shared spaces tidy.
          </Paragraph>
        </Section>

        <Section title="Reporting & Assistance">
          <Paragraph>
            If you experience or witness behavior that violates this Code of Conduct, or if you need assistance for any
            reason:
          </Paragraph>
          <Paragraph>Please contact event organizers or designated support staff.</Paragraph>
          <Paragraph>
            All reports will be treated with discretion. Event organizers are empowered to take appropriate actions in
            response to violations.
          </Paragraph>
        </Section>

        <Section title="Adaptation">
          <Paragraph>
            This Code of Conduct is adapted from the NixCon 2024 Code of Conduct and the bUm Code of Conduct.
          </Paragraph>
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
