import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

function InputDatePicker({
    value,
    label,
    name,
    variant,
    color,
    span = '4',
    handleBlur,
    handleChange,
    error,
    helperText,
    inputProps = false,
    fieldSize = 'medium',
    mindate = null,
}) {
    if (inputProps === false) {
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    fullWidth
                    slotProps={{
                        textField: {
                            variant: variant,
                            color: color,
                            error: error,
                            helperText: helperText,
                            size: fieldSize,
                        },
                    }}
                    label={label}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value ? dayjs(value) : null}
                    name={name}
                    format='DD-MM-YYYY'
                    error={error}
                    helperText={helperText}
                    sx={{ gridColumn: `span ${span}` }}
                    minDate={mindate}
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
                onChange={handleChange}
                value={value ? dayjs(value).format('MMMM D, YYYY') : null}
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

export default InputDatePicker;
