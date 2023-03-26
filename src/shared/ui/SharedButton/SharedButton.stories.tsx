import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
  SharedButton,
  SharedButtonShape,
  SharedButtonSize,
  SharedButtonTheme,
} from './SharedButton';
import 'app/styles/styles.scss';

export default {
  title: 'shared/Button',
  component: SharedButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SharedButton>;

const Template: ComponentStory<typeof SharedButton> = (args) => <SharedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: SharedButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: SharedButtonTheme.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: SharedButtonTheme.OUTLINE,
  size: SharedButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: SharedButtonTheme.OUTLINE,
  size: SharedButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: SharedButtonTheme.OUTLINE,
  size: SharedButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: SharedButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: SharedButtonTheme.BG,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: SharedButtonTheme.BG_INVERTED,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: SharedButtonTheme.BG,
  shape: SharedButtonShape.SQUARE,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: SharedButtonTheme.BG,
  shape: SharedButtonShape.SQUARE,
  size: SharedButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: SharedButtonTheme.BG,
  shape: SharedButtonShape.SQUARE,
  size: SharedButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: SharedButtonTheme.BG,
  shape: SharedButtonShape.SQUARE,
  size: SharedButtonSize.XL,
};
