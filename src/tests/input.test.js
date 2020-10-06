import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../components/input';

test('Input Component - with wrapper', () => {
    const tree = renderer
        .create(
            <Input
                onChangeFunc={() => 'true'}
                isWrapped
                inputType='text'
                value='value'
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Input Component – without wrapper, with placeholder', () => {
    const tree = renderer
        .create(
            <Input
                onChangeFunc={() => 'false'}
                isWrapped={false}
                value='1234wdwd'
                placeholder="Placeholder Text"
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});