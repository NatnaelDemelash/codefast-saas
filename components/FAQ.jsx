import FAQListItem from './FAQListItem';

const FAQs = [
  {
    question: 'What is a feedback board, and how does it work?',
    answer:
      'A feedback board is a dedicated space where your users can share their thoughts, suggestions, and issues about your product. You can create a board in minutes, share it with your users, and start collecting actionable insights to improve your product.',
  },
  {
    question: 'How can this app help me prioritize features?',
    answer:
      'Our app allows users to upvote or comment on feedback, helping you identify the most requested features or pressing issues. You can also categorize and filter feedback to focus on what matters most to your customers.',
  },
  {
    question: 'Is this app suitable for small businesses or solo creators?',
    answer:
      "Absolutely! Whether you're launching a new app, course, or product, our tool is designed to help creators of all sizes gather valuable feedback and make data-driven decisions to improve their offerings.",
  },
  {
    question: 'Can I integrate this with other tools I use',
    answer:
      'Yes, our app integrates with popular tools like Slack, Trello, and Zapier, making it easy to streamline your workflow and act on feedback quickly.',
  },
];

export default function FAQ() {
  return (
    <section
      className="bg-gray-50 py-32 px-8 flex flex-col lg:flex-row items-center text-center justify-between"
      id="faq"
    >
      <div className="flex flex-col">
        <p className="text-sm uppercase text-primary font-bold mb-4">FAQ</p>
        <h1 className="text-gray-700 max-w-xl text-4xl md:text-5xl mb-6">
          Frequently Asked Question
        </h1>
      </div>

      <ul className="max-w-4xl mx-auto">
        {FAQs.map((faq) => {
          return <FAQListItem key={faq.question} faq={faq} />;
        })}
      </ul>
    </section>
  );
}
