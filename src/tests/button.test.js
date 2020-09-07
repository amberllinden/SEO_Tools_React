import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/button';

test('Button component - some content with css-class "button-css"', () => {
    const tree = renderer
        .create(
            <Button
                onClickFuntion={() => 2}
                content="some content"
                styleClass="button-css"
            />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
