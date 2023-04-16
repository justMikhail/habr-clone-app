import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SharedInput } from 'shared/ui/SharedInput/SharedInput';

export default {
  title: 'shared/Input',
  component: SharedInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SharedInput>;

const Template: ComponentStory<typeof SharedInput> = (args) => <SharedInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: '123123',
};
