import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputTextField from './InputTextField';

function AutoCompleteWithSecondaryLine({
    value,
    handleChange,
    isOptionEqualToValue,
    readOnly = false,
    color,
    label,
    span = 2,
    elementId,
    data,
    variant,
    match0,
    match1,
    match2,
    match3,
    error = false,
    helperText
}) {
    const filterOptions = (options, { inputValue }) => {
        return options.filter(
            (option) =>
                option[match1]?.toLowerCase().includes(inputValue.toLowerCase()) ||
                option[match2]?.toLowerCase().includes(inputValue.toLowerCase()) ||
                option[match3]?.toLowerCase().includes(inputValue.toLowerCase()) ||
                toString(option[match0]).includes(inputValue),
        );
    };
    if (readOnly && value?.name) {
        return (
            <InputTextField
                type={'text'}
                label={label}
                value={value?.name || ''}
                handleChange={() => null}
                variant={variant || 'outlined'}
                color='info'
                inputProps={true}
            />
        )
    } else {
        return (
            <Autocomplete
                fullWidth
                id={elementId}
                options={data}
                sx={{ gridColumn: `span ${span}` }}
                value={value}
                autoHighlight
                readOnly={readOnly}
                getOptionLabel={(option) => option[match1]}
                filterOptions={filterOptions}
                isOptionEqualToValue={isOptionEqualToValue}
                onChange={(e, option) => handleChange(e, option)}
                renderOption={(props, option) => (
                    <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        {/* <Box component="div" sx={{ display: "flex", m: 1, minWidth: "60px" }}>
                        ID: {option[match0]}
                    </Box> */}
                        <Box component='div' sx={{ display: 'grid' }}>
                            <Box component='div' display="block">
                                {option[match1]}, &nbsp;
                            </Box>
                            <Box component='div' display="block">
                                {option[match2]},&nbsp;
                            </Box>
                            {option[match3] ?
                                <Box component='div' display="block">
                                    {option[match3]}&nbsp;
                                </Box> : null
                            }
                            {/* {option[match1]}, {option[match2]} */}
                        </Box>
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        color={color}
                        variant={variant}
                        error={error}
                        helperText={error ? helperText : ''}
                        {...params}
                        label={label}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
        )
    };
}

export default AutoCompleteWithSecondaryLine;
