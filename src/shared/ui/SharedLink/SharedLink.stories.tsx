import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SharedLink, SharedLinkTheme } from './SharedLink';

export default {
  title: 'shared/Link',
  component: SharedLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof SharedLink>;

const Template: ComponentStory<typeof SharedLink> = (args) => <SharedLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: SharedLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: SharedLinkTheme.SECONDARY,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Text',
  theme: SharedLinkTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: SharedLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: SharedLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  children: 'Text',
  theme: SharedLinkTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
