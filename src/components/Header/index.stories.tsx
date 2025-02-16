import Header, { HeaderProps } from './index';
import React from 'react';
import { StoryObj } from '@storybook/react';
import { PropsValue, SelectInstance } from 'react-select';
import { mockFetchData } from 'util/mockFetchData';
import { filterByStringProp } from 'util/mockFetchData/filterData';
import { mockOptions } from '../SmartInput/mockData';
import { SmartInputProps, OptionProps } from '../SmartInput';
import cbiLogo from './CBI-logo-white.svg';

export const Primary: StoryObj<HeaderProps> = {
  args: {
    showLogo: true,
    logoImg: cbiLogo,
  },
  argTypes: {
    onSearchClick: {
      action: 'onSearchClick',
    },
    onAdvancedSearchClick: {
      action: 'onAdvancedSearchClick',
    },
    smartInputProps: {
      onChange: {
        action: 'smartInputProps/onChange',
      },
      onClear: {
        action: 'smartInputProps/onClear',
      },
      onMenuClose: {
        action: 'smartInputProps/onMenuClose',
      },
      onBlur: {
        action: 'smartInputProps/onBlur',
      },
      onFocus: {
        action: 'smartInputProps/onFocus',
      },
      onKeyDown: {
        action: 'smartInputProps/onKeyDown',
      },
      onOptionClick: {
        action: 'smartInputProps/onOptionClick',
      },
    },
  },
  render: ({
    showLogo,
    logoImg,
    onSearchClick,
    onAdvancedSearchClick,
    smartInputProps,
  }): JSX.Element => {
    const [searchItems, setSearchItems] = React.useState<PropsValue<OptionProps>>();
    const [options, setOptions] = React.useState<OptionProps[]>([]);
    const ref = React.useRef<SelectInstance<OptionProps, true>>(null);
    const [inputValue, setInputValue] = React.useState('');

    const onSetSearchItems = (items: PropsValue<OptionProps>) => {
      if (Array.isArray(searchItems) && Array.isArray(items)) {
        setSearchItems([...searchItems, ...items]);
      } else {
        setSearchItems(items);
      }
    };

    const onInputChange = (value: string) => {
      const opts = filterByStringProp(mockOptions, 'label', 'contains', value);
      setInputValue(value);
      setOptions(opts);
    };

    React.useEffect(() => {
      const getData = async () => {
        const data = await mockFetchData(mockOptions, 1000);
        setOptions(data);
      };

      getData();
    }, [mockFetchData, setOptions]);

    const mergedSmartInputProps: SmartInputProps = {
      onInputChange,
      onSetSearchItems,

      placeholder: 'Search for companies',
      options,
      searchItems,
      inputValue,
      openMenuOnClick: false,
      isMulti: true,

      selectRef: ref,
      ...smartInputProps,
    };

    return (
      <Header
        onSearchClick={onSearchClick}
        showLogo={showLogo}
        logoImg={logoImg}
        onAdvancedSearchClick={onAdvancedSearchClick}
        smartInputProps={mergedSmartInputProps}
      />
    );
  },
};

export default {
  component: Header,
  title: 'Components/Header',
};
