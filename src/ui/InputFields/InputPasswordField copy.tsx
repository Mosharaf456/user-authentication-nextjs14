import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockIcon from '@mui/icons-material/Lock';

interface InputPasswordFieldProps {
    id: string;
    value: string;
    label: string;
    size?: TextFieldProps['size'];
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

const InputPasswordField: React.FC<InputPasswordFieldProps> = ({
    id,
    value,
    label,
    size = 'medium',
    name,
    variant = 'outlined',
    color = 'primary',
    span = 4,
    handleBlur,
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
          autoComplete='password'
          type={show ? 'text' : 'password'}
          // label={label}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          name={name}
          error={error}
          helperText={helperText}
          placeholder = {placeholder? placeholder : 'Password'}
          sx={{ gridColumn: `span ${span}` }}
          InputProps={{
            readOnly: inputProps,
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShow((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge='end'
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position='start'>
                <LockIcon />
              </InputAdornment>
          ),
          }}
        />
      </React.Fragment>
    );
  };
  
  export default InputPasswordField;