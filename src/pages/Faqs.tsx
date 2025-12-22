import { Seo } from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { MotionInView } from '../components/ui/MotionInView'
import { Accordion } from '../components/ui/Accordion'
import { site } from '../config/site'

export function Faqs() {
  const items = [
    {
      question: 'Do you do custom Jeep builds?',
      answer:
        'Yes—tell us your goals (daily driving, off-road, touring) and we’ll recommend a build plan with parts and timeline.',
    },
    {
      question: 'Do you sell parts and ship?',
      answer:
        'If you need specific parts, contact us with your vehicle details and we’ll let you know availability and delivery options.',
    },
    {
      question: 'Is there a warranty?',
      answer:
        'Warranty depends on the parts used and the type of work. We’ll clarify warranty coverage during quoting.',
    },
    {
      question: 'How long do modifications usually take?',
      answer:
        'Timelines depend on parts availability and job complexity. We’ll provide an estimated schedule after inspection.',
    },
  ]

  return (
    <>
      <Seo title={`FAQs | ${site.fullName}`} description="Frequently asked questions about Jeep modifications and repairs." />

      <Section>
        <Container>
          <MotionInView>
            <h1 className="text-3xl font-black">FAQs</h1>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Quick answers to common questions—helps reduce repetitive inquiries.
            </p>
            <div className="mt-8 max-w-3xl">
              <Accordion items={items} />
            </div>
          </MotionInView>
        </Container>
      </Section>
    </>
  )
}
