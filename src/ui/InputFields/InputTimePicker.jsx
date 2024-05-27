import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

function InputTimePicker({
    value,
    label,
    name,
    variant,
    color,
    span = "4",
    handleBlur = null,
    handleChange = null,
    error,
    helperText,
    inputProps = false,
    fieldSize = "medium"
}) {
    if (inputProps === false) {
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopTimePicker
                    slotProps={{ textField: { variant: variant, color: color, error: false, size: fieldSize, helperText: helperText } }}
                    color={color}
                    variant={variant}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value ? dayjs(value) : null}
                    name={name}
                    error={error}
                    label={label}
                    sx={{ gridColumn: `span ${span}` }}
                    fullWidth
                />
            </LocalizationProvider>
        );
    } else {
        return (
            <TextField
                fullWidth
                color={color}
                variant={variant}
                type='text'
                label={label}
                onBlur={handleBlur}
                // onChange={handleChange}
                value={value}
                name={name}
                error={error}
                helperText={helperText}
                sx={{ gridColumn: `span ${span}` }}
                InputProps={{
                    readOnly: inputProps,
                }}
            />
        );
    }
}

export default InputTimePicker;

