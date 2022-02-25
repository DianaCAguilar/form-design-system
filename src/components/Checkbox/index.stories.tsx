import React from 'react';
import { StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    name: 'spam',
    label: 'I agree to receive spam',
  },
};

export const ManagingCheckedState: StoryObj<CheckboxProps> = {
  args: {
    defaultChecked: true,
    name: 'default-checked',
    label: 'Checked by default',
  },
  parameters: {
    docs: {
      description: {
        story:
          '`Checkbox` will render as unchecked by default. Use the `defaultChecked` boolean prop to set the initial state to checked.',
      },
    },
  },
};

export const PreventingUserInteraction: StoryObj<CheckboxProps> = {
  render: (): JSX.Element => (
    <>
      <div>
        <Checkbox disabled name="disabled-unchecked" label="Disabled unchecked" />
      </div>
      <div>
        <Checkbox
          disabled
          defaultChecked
          name="disabled-checked"
          label="Disabled checked"
        />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `disabled` prop to prevent the user from changing the checked state of the checkbox.',
      },
    },
  },
};

export const CheckboxWithoutLabel: StoryObj<CheckboxProps> = {
  args: {
    name: 'no-label',
    label: "I don't have a label",
    showLabel: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can prevent the label from showing by setting `showLabel` to `false`. The value of the `label` prop will be used to set an ARIA attribute.',
      },
    },
  },
};

export const IndeterminateCheckboxes: StoryObj<CheckboxProps> = {
  args: {
    indeterminate: true,
    name: 'notsureif',
    label: 'Indeterminate checkbox',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Passing the `indeterminate` boolean prop will set `indeterminate` attribute of the underlying input element and render the `CheckIndeterminate` icon when the checkbox is checked.',
      },
    },
  },
};

export const ReadingTheValueOfACheckbox: StoryObj<CheckboxProps> = {
  args: {
    label: 'Option one',
  },
  parameters: {
    docs: {
      description: {
        story:
          ' The `onChange` prop will be spread on the `input` element the `Checkbox` component renders. Read the `checked` attribute of the event `currentTarget`.',
      },
    },
  },
};

export default {
  component: Checkbox,
  title: 'components/Checkbox',
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
  parameters: {
    componentSubtitle: 'Uncontrolled custom checkbox component with optional label.',
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};