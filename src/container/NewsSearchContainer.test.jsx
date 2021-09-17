/* eslint-disable max-len */
import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearchContainer from './NewsSearchContainer';

describe('NewsSearchContainer', () => {
    it('should render a list of news articles by search', async () => {
        render(<NewsSearchContainer />);

    })
})