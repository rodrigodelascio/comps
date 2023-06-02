import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "123789456a",
      label: "Can I use React on a project?",
      content:
        "React is the most popular JavaScript framework on the planet. You can use it to quickly create feature-rich web applications. Also, it enables you to easily add new features to your existing project, like React image upload. You just need to type a few lines of code.",
    },
    {
      id: "123789456b",
      label: "Can I use JavaScript on a project?",
      content:
        "After you have learned the language to its perfection, you can try to create a beginner-level project with JavaScript. If you already know the language, then you can try to build an advanced-level project in JavaScript language. Scripts are provided and executed as plain text. They don't need special preparation or compilation to run.",
    },
    {
      id: "123789456c",
      label: "Can I use CSS on a project?",
      content:
        "CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. The most common way to add CSS, is to keep the styles in external CSS files.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
