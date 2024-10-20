// FooterComponent.stories.jsx

import FooterComponent from "./Footer";

export default {
  title: 'Components/FooterComponent',
  component: FooterComponent,
  argTypes: {
    footNotes: { 
      control: 'object', // Allowing modification of the entire footNote object
      description: 'Array of footnote objects'
    },
  },
};

const Template = (args) => (
  <div>
    <FooterComponent {...args} />
    <pre>{JSON.stringify(args.footNotes, null, 2)}</pre> {/* Display JSON */}
  </div>
);

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  footNotes: [
    {
      id: "description_1",
      description: "<p>Hello, this is my first React app. <a href='www.google.com'>Footer</a> is nice, and Deadpool is also nice, but Nicepool is even nicer.</p>"
    },
    {
      id: "description_2",
      description: "<p>This is the second description. You can learn more at <a href='www.example.com'>this link</a>.</p>"
    },
    {
      id: "description_3",
      description: "<p>The third description talks about React and how it's a great framework for building UIs.</p>"
    },
    {
      id: "description_4",
      description: "<p>Fourth description here, focusing on component reuse in React applications.</p>"
    }
  ],
};

// Separate dynamic story to allow users to input their own descriptions

export const EditableFooter = Template.bind({});
EditableFooter.args = {
  footNotes: [
    {
      id: "description_1",
      description: "<p>You can modify this description in the Storybook Controls.</p>"
    },
    {
      id: "description_2",
      description: "<p>Try inputting your own custom text or links here.</p>"
    }
  ]
};
