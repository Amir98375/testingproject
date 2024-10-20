
import ErrorComponent from "./Error";
export default {
  title: "Components/ErrorComponent",
  component: ErrorComponent,
  argTypes: {
    message: { control: "text" },
  },
};

const Template = (args) => <ErrorComponent {...args} />;

export const DefaultError = Template.bind({});
DefaultError.args = {
  message: "Something went wrong!",
};



export const CustomError = Template.bind({});
CustomError.args = {
  message: "This is a custom error message!",
};

// Storybook: Add an extra export to log args as JSON
export const ErrorComponentJson = (args) => {
  return (
    <div>
      <ErrorComponent {...args} />
      <pre>{JSON.stringify(args, null, 2)}</pre>
    </div>
  );
};

ErrorComponentJson.args = {
  message: "Error with JSON view",
};
