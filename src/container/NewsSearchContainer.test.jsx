/* eslint-disable max-len */
import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearchContainer from './NewsSearchContainer';

describe('NewsSearchContainer', () => {
    it.skip('should render a list of news articles by search', async () => {
        render(<NewsSearchContainer />);
screen.getByText('Loading');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('New Search');
    userEvent.type(input, '{selectall}{backspace}cat');

    const submitButton = await screen.findByRole('button', { name: 'find-articles' });
    userEvent.click(submitButton);

        return waitFor(() => {
            const articles = screen.getAllByText('cat', { exact: false });
            expect(articles.length).toEqual(5);
        })
    })
})