import React from 'react';
import { TextField } from '@mui/material';

function InputTextFieldWrapperState({
    type = 'text',
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
    multiline = true,
    disabled = false,
    fieldSize = 'medium',
}) {
    // const [fieldValue, setFieldValue] = React.useState('');
    // useEffect(() => {
    //     handleChange('', name, "wrapperText", fieldValue);
    // }, [fieldValue]);
    return (
        <TextField
            fullWidth
            disabled={disabled}
            color={color}
            variant={variant}
            type={type}
            label={label}
            // to make the textfield work with the formik handleChange function
            // onblur is used to update the formik state
            // this gives more smoother user experience
            onBlur={(e) => handleChange(e)}
            rows={rows}
            multiline={multiline}
            initialValue={value}
            // onChange={e => setFieldValue(e.target.value)}
            // value={fieldValue}
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
}

export default InputTextFieldWrapperState