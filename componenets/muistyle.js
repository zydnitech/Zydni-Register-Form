import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const TextFields = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',

    },
    '& label': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'Black',
            borderRadius: "10px",
            color: "black",

        },
        '&:hover fieldset': {
            borderImage: 'linear-gradient(to right, #F14722, #239B99) 1',
        },
        '&.Mui-focused fieldset ': {
            borderColor: 'black',
        }, '& label.Mui-focused': {
            color: 'White',
        },  '&:link': {
            backgroundColor : "white",
        },
    },
});

export const Buttons = styled(Button)({
    fontSize: 16,
    borderColor: 'black',
    borderRadius: '10px',
    color: 'black',
    padding: '10px',
    '&:hover': {
        borderImage: 'linear-gradient(to right, #F14722, #239B99) 1',
    },
    '&:active': {
        boxShadow: 'none',
    },
});
