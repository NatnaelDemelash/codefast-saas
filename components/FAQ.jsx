import FAQListItem from "./FAQListItem";

const FAQs = [
  {
    question: "What is a feedback board, and how does it work?",
    answer:
      "A feedback board is a dedicated space where your users can share their thoughts, suggestions, and issues about your product. You can create a board in minutes, share it with your users, and start collecting actionable insights to improve your product.",
  },
  {
    question: "How can this app help me prioritize features?",
    answer:
      "Our app allows users to upvote or comment on feedback, helping you identify the most requested features or pressing issues. You can also categorize and filter feedback to focus on what matters most to your customers.",
  },
  {
    question: "Is this app suitable for small businesses or solo creators?",
    answer:
      "Absolutely! Whether you're launching a new app, course, or product, our tool is designed to help creators of all sizes gather valuable feedback and make data-driven decisions to improve their offerings.",
  },
  {
    question: "Can I integrate this with other tools I use",
    answer:
      "Yes, our app integrates with popular tools like Slack, Trello, and Zapier, making it easy to streamline your workflow and act on feedback quickly.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 px-8">
      <p className="text-sm uppercase text-yellow-400 font-bold mb-4">FAQ</p>
      <h1 className="max-w-2xl text-4xl md:text-5xl mb-6">
        Frequently Asked Question
      </h1>

      <ul>
        {FAQs.map((faq) => {
          return <FAQListItem faq={faq} />;
        })}
      </ul>
    </section>
  );
}
