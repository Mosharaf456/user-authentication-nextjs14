import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';

interface InputUsernameFieldProps {
    id: string;
    value: string;
    label?: string;
    type: string;
    size?: TextFieldProps['size'];
    autoComplete?: string;
    name: string;
    variant?: TextFieldProps['variant'];
    color?: TextFieldProps['color'];
    span?: number;
    handleBlur?: React.FocusEventHandler<HTMLInputElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    error?: boolean;
    helperText?: React.ReactNode;
    inputProps?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

const InputUsernameField: React.FC<InputUsernameFieldProps> = ({
    id,
    value,
    label,
    type,
    size = 'medium',
    name,
    variant = 'outlined',
    color = 'primary',
    span = 4,
    handleBlur,
    autoComplete,
    handleChange,
    error = false,
    helperText,
    inputProps = false,
    disabled = false,
    placeholder
  }) => {
    const [show, setShow] = useState(false);
  
    return (
      <React.Fragment>
        <TextField
          fullWidth
          required
          id={id}
          disabled={disabled}
          color={color}
          size={size}
          variant={variant}
          autoComplete={autoComplete}
          type={type}
          // label={label}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          name={name}
          error={error}
          helperText={helperText}
          placeholder = {placeholder? placeholder : 'Username'}
          sx={{ gridColumn: `span ${span}` }}
          InputProps={{
            readOnly: inputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <PermIdentityIcon fontSize="medium" sx={{  borderRadius: '50%' }} />

              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: value ? true : undefined, // Ensures label shrinks when there's a value
            style: { marginLeft: 30 }
          }}
        />
      </React.Fragment>
    );
  };
  
  export default InputUsernameField;