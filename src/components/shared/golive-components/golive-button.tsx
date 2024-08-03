'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { startCountdownAsync } from '@/store/slice/counterSlice';
import { AppDispatch } from '@/store/store';

const GoliveButton = () => {
    const dispatch: AppDispatch = useDispatch();

    const handleClick = () => {
        dispatch(startCountdownAsync());
    };

    return (
        <Button onClick={handleClick}>Go Live</Button>
    );
}

export default GoliveButton;