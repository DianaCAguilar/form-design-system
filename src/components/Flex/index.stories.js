import React from 'react';
import FlexItem from 'components/FlexItem';
import Flex from '.';

const parentStyle = {
  width: '600px',
};

export const Primary = (args) => (
  <div style={parentStyle} className="debug--flex">
    <Flex {...args}>
      <FlexItem shrink>
        <img src="https://place-hold.it/40x40/a02385/fff&text=IMG" />
      </FlexItem>
      <FlexItem shrink>
        <h4>Look at this cool content</h4>
      </FlexItem>
      <FlexItem shrink>
        <p className="color--link">edit</p>
      </FlexItem>
    </Flex>
  </div>
);

export const classicMediaBlock = (args) => (
  <div style={parentStyle} className="debug--flex">
    <Flex {...args}>
      <FlexItem shrink>
        <img src="https://place-hold.it/40x40/a02385/fff&text=:)" />
      </FlexItem>
      <FlexItem>
        Look at this media block. Notice how this area grows to fill the remaining space
        of the fixed width parent container. When this content wraps, it will not wrap
        below the figure the same way it would when positioning the image with a
        <code>float</code>.
      </FlexItem>
    </Flex>
  </div>
);

classicMediaBlock.parameters = {
  docs: {
    description: {
      story:
        'Making the image `FlexItem` `shrink` and allowing the description `FlexItem` to grow creates the classic "media block" layout pattern.',
    },
  },
};

export const autoSizedContentArea = (args) => (
  <div style={{ height: '300px' }} className="debug--flex">
    <Flex direction="column" {...args}>
      <FlexItem shrink>
        <p>
          This is the header, in a <code>FlexItem</code> set to <code>shrink</code>
        </p>
      </FlexItem>
      <FlexItem>
        <p>
          This is the content area, in a <code>FlexItem</code> that will grow to fill
          remaining space
        </p>
      </FlexItem>
      <FlexItem shrink>
        <p>
          This is the footer, in a <code>FlexItem</code> set to <code>shrink</code>
        </p>
      </FlexItem>
    </Flex>
  </div>
);

autoSizedContentArea.parameters = {
  docs: {
    description: {
      story:
        'Within a fixed height container, this `Flex` creates a fixed height header and footer which allows the content area to expand to fill the remaining space.',
    },
  },
};

export default {
  component: Flex,
  subcomponents: { FlexItem },
  title: 'components/Flex',
  parameters: {
    docs: {
      description: {
        component:
          'Flex is an abstraction of CSS flexbox that provides a subset of flexbox functionality. **A `Flex` should only contain `FlexItem` children**.',
      },
    },
  },
};