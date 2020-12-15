import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import Rating from "./Rating";


export default {
    title: 'Rating',
    component: Rating,
} as Meta;



export const oneRating = () => { return <Rating />};