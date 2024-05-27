import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

function InputSelectField({
    vitalAlertDiagnosis = false,
    id = '',
    items = [],
    value = '',
    label = '',
    labelId = '',
    name = '',
    variant = '',
    color = '',
    span = '',
    handleBlur = null,
    handleChange = null,
    error = null,
    helperText = null,
    inputProps = false,
    fieldSize = 'medium',
}) {
    if (inputProps === false) {
        return (
            <React.Fragment>
                <FormControl
                    fullWidth
                    variant={variant}
                    color={color}
                    sx={{
                        gridColumn: `span ${span}`,
                    }}
                    size={fieldSize}
                >
                    <InputLabel id={labelId} className='inputLabelClass'>
                        {label}
                    </InputLabel>
                    <Select
                        labelId={labelId}
                        id={id}
                        value={value}
                        fullWidth
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name={name}
                        error={error}
                        helperText={helperText}
                        size={fieldSize}
                        label={label}
                    >
                        {items.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                {vitalAlertDiagnosis ? (
                    <TextField
                           color={color}
                           variant={variant}
                           type='text'
                           label={label}
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={value}
                           name={name}
                           error={error}
                           helperText={helperText}
                           sx = {{ 
                            gridColumn: `span ${span}`,
                            width: '100%',
                            '@media (max-width: 600px)': {
                                width: '60vw', 
                                '& label, & input': {
                                    fontSize: '90%',
                                },
                            },
                            '@media (max-width: 400px)': {
                                width: '50%', 
                                '& label, & input': {
                                    fontSize: '75%', 
                                },
                            },
                        }}
                        InputProps={{
                            readOnly: inputProps,
                        }}
                    />
                ): (
                    <TextField
                        fullWidth
                        color={color}
                        variant={variant}
                        type='text'
                        label={label}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value}
                        name={name}
                        error={error}
                        helperText={helperText}
                        sx={{ gridColumn: `span ${span}`}}
                        InputProps={{
                            readOnly: inputProps,
                        }}
                    />
                )}
               
            </React.Fragment>
        );
    }
}

export default InputSelectField;
