import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterGroupItem } from '@ui5/webcomponents-react/lib/FilterGroupItem';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

const variants = <VariantManagement variantItems={variantItems} />;
const search = <Input placeholder={'Search'} />;

describe('FilterBar', () => {
  it('Render without crashing - default props', () => {
    const wrapper = mount(
      <FilterBar>
        <FilterGroupItem label="Classification" key="classification">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('Render without crashing - w/ filter dialog', () => {
    const wrapper = mount(
      <FilterBar
        search={search}
        variants={variants}
        useToolbar={true}
        filterBarExpanded={true}
        loading={false}
        considerGroupName={true}
        filterContainerWidth="12rem"
        activeFiltersCount={1337}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showGo={true}
        showGoOnFB={true}
        showFilterConfiguration={true}
        showSearchOnFiltersDialog={true}
        showClearButton={true}
        showRestoreButton={true}
      >
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
          <Select>
            <Option data-key="Test 1" selected icon="add">
              Test 1
            </Option>
            <Option data-key="Test 2" icon="add">
              Test 2
            </Option>
            <Option data-key="Test 3" icon="add">
              Test 3
            </Option>
            <Option data-key="Test 4" icon="add">
              Test 4
            </Option>
            <Option data-key="Test 5" icon="add">
              Test 5
            </Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="MultBox" groupName="Group 2" required>
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" required>
          <DatePicker />
        </FilterGroupItem>
      </FilterBar>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('Hide FilterBar', () => {
    const wrapper = mount(
      <FilterBar>
        <FilterGroupItem label="Classification" key="classification">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );
    const toggleBtn = wrapper.find('Button');
    const toggleBtnBefore = toggleBtn.render();
    act(() => {
      toggleBtn.getElement().props.onClick();
    });
    expect(toggleBtn.render()).not.toBe(toggleBtnBefore);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('Toggle Filters Dialog', () => {
    const wrapper = mount(
      <FilterBar
        search={search}
        variants={variants}
        useToolbar={true}
        filterBarExpanded={true}
        loading={false}
        considerGroupName={true}
        filterContainerWidth="12rem"
        activeFiltersCount={1337}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showGo={true}
        showGoOnFB={true}
        showFilterConfiguration={true}
        showSearchOnFiltersDialog={true}
        showClearButton={true}
        showRestoreButton={true}
      >
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
          <Select>
            <Option data-key="Test 1" selected icon="add">
              Test 1
            </Option>
            <Option data-key="Test 2" icon="add">
              Test 2
            </Option>
            <Option data-key="Test 3" icon="add">
              Test 3
            </Option>
            <Option data-key="Test 4" icon="add">
              Test 4
            </Option>
            <Option data-key="Test 5" icon="add">
              Test 5
            </Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="MultBox" groupName="Group 2" required>
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" required>
          <DatePicker />
        </FilterGroupItem>
      </FilterBar>
    );
    const openFiltersDialogBtn = wrapper.find('.FilterBar-headerRowRight-0-2-7').childAt(3);
    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    wrapper.update();
    expect(wrapper.find('ui5-dialog').exists()).toBeTruthy();
    expect(wrapper.render()).toMatchSnapshot();
    const filtersDialogBtns = (index) => wrapper.find(Bar).find(Button).at(index);
    act(() => {
      //@ts-ignore
      filtersDialogBtns(0).prop('onClick')();
    });
    wrapper.update();
    expect(wrapper.find('ui5-dialog').exists()).toBeFalsy();
    expect(wrapper.render()).toMatchSnapshot();
    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    wrapper.update();
    expect(wrapper.find('ui5-dialog').exists()).toBeTruthy();
    act(() => {
      //@ts-ignore
      filtersDialogBtns(3).prop('onClick')();
    });
    wrapper.update();
    expect(wrapper.find('ui5-dialog').exists()).toBeFalsy();
    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    wrapper.update();
    expect(wrapper.find('ui5-dialog').exists()).toBeTruthy();
    act(() => {
      //@ts-ignore
      filtersDialogBtns(4).prop('onClick')();
    });
    wrapper.update();
    expect(wrapper.find('ui5-dialog').exists()).toBeFalsy();
  });

  it('Group Filter Items mounted in Dialog', () => {
    const wrapper = mount(
      <FilterBar
        search={search}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showFilterConfiguration={true}
        showSearchOnFiltersDialog={true}
        showClearButton={true}
        showRestoreButton={true}
      >
        <FilterGroupItem label="INPUT">
          <Input placeholder="Placeholder" value="123123" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH">
          <Switch checked={true} />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required>
          <Select>
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    const filterItemsFB = wrapper.find(FilterGroupItem);
    const openFiltersDialogBtn = wrapper.find('.FilterBar-headerRowRight-0-2-7').childAt(3);
    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    wrapper.update();

    const filterItemsDialog = wrapper.find('ui5-dialog').find(FilterGroupItem);

    const filterItemsDialogString = filterItemsDialog.debug({ ignoreProps: true });
    const filterItemsFBString = filterItemsFB.debug({ ignoreProps: true });
    // @ts-ignore
    expect(filterItemsDialogString).toEqual(filterItemsFBString);
    const filterItemMandatory = filterItemsDialog.at(2);
    expect(filterItemMandatory.prop('required')).toBeTruthy();
    const checkbox = filterItemMandatory.parents().find(CheckBox).at(0);
    expect(checkbox.prop('disabled')).toBeTruthy();
  });

  createPassThroughPropsTest(FilterBar);
});
