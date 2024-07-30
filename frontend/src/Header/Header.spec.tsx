import React, {act} from 'react';
import {render, screen} from "@testing-library/react";
import {Header} from "./Header";

const renderHeader = () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Header/>);
    })
}

describe('Header Component', () => {
    it('renders title and login button on initialization', () => {
        renderHeader();

        let title = screen.getByText("Todo Or Not Todo");
        expect(title).toBeVisible();
    })
})