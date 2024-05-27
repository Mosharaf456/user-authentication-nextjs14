import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { MenuItem, } from '@mui/material';
import { Select } from '@mui/material';



function InputTwoColumnDropDown({
    index = 0,
    variant = "outlined",
    title = "title",
    onChangeSetValue = null,
    name = null,
    unitOptions = [],
    type = "number",
    required = false,
    error = false,
    helperText = "",
}) {
    const [selectValue, setSelectValue] = React.useState(unitOptions[0] ? unitOptions[0].key : null);
    const [value, setvalue] = React.useState(null);
    useEffect(() => {
        if (onChangeSetValue && name && selectValue) {
            const submit = { value: value, unit: selectValue }
            onChangeSetValue(index, name, submit)
        }
    }, [selectValue, value])
    return (
        <TextField
            fullWidth
            type={type}
            id={"TwoColumnDropDown_" + title}
            label={title}
            variant={variant}
            value={value}
            size="small"
            required={required}
            onChange={e => setvalue(e.target.value)}
            error={error}
            helperText={helperText}
            sx={
                {
                    '& input[type=number]': {
                        '-moz-appearance': 'textfield'
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: 0
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                        '-webkit-appearance': 'none',
                        margin: 0
                    }
                }
            }
            InputProps={
                {
                    endAdornment: (
                        <InputAdornment position="end">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectValue}
                                sx={{
                                    boxShadow: "none",
                                    ".MuiOutlinedInput-notchedOutline": { border: "0 !important" },
                                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                    {
                                        border: 0,
                                    },
                                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        border: 0,
                                    },
                                }}
                                input={<OutlinedInput classes={{ notchedOutline: 'no-border' }} />}
                                // border={0}
                                onChange={e => setSelectValue(e.target.value)}
                            >
                                {unitOptions.map((item) => (
                                    <MenuItem value={item.key}>{item.value}</MenuItem>
                                ))}
                            </Select>
                        </InputAdornment>
                    )
                }


            }

        />
    );
}

export default InputTwoColumnDropDown;