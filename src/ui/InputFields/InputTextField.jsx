import React from 'react';
import { TextField } from '@mui/material';

function InputTextField({
    type = 'text',
    vitalAlertMax = false,
    vitalAlertMin = false,
    value,
    label,
    name,
    variant,
    color,
    span = 4,
    handleBlur,
    handleChange,
    error,
    helperText,
    inputProps = false,
    rows = 4,
    multiline = false,
    disabled = false,
    fieldSize = 'medium',
}) {
    if (multiline) {
        return (
            <TextField
                fullWidth
                disabled={disabled}
                color={color}
                variant={variant}
                type={type}
                label={label}
                onBlur={handleBlur}
                rows={rows}
                multiline
                onChange={handleChange}
                value={value}
                name={name}
                error={error}
                helperText={helperText}
                sx={{ gridColumn: `span ${span}` }}
                size={fieldSize}
                InputProps={{
                    readOnly: inputProps,
                }}
            />
        );
    } else {
        return (
            <React.Fragment>
                {vitalAlertMax || vitalAlertMin ? (
                    <TextField
                        disabled={disabled}
                        color={color}
                        variant={variant}
                        type={type}
                        label={label}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value}
                        size={fieldSize}
                        name={name}
                        error={error}
                        helperText={helperText}
                        sx={{
                            gridColumn: `span ${span}`,
                            justifyContent: "end",
                            width: '100%',
                            '@media (max-width: 600px)': {
                                width: '20vw',
                                '& label, & input': {
                                    fontSize: '90%',
                                },
                            },
                            '@media (max-width: 400px)': {
                                width: '40%',
                                '& label, & input': {
                                    fontSize: '75%',
                                },
                            },
                        }}
                        InputProps={{
                            readOnly: inputProps,
                        }}
                    />
                ) : (
                    <TextField
                        fullWidth
                        disabled={disabled}
                        color={color}
                        variant={variant}
                        type={type}
                        label={label}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value}
                        size={fieldSize}
                        name={name}
                        error={error}
                        helperText={helperText}
                        sx={{ gridColumn: `span ${span}`, }}
                        InputProps={{
                            readOnly: inputProps,
                        }}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default InputTextField;
