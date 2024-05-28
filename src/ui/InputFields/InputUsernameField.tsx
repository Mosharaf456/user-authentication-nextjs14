import React, { useState } from 'react';
import { TextField, InputAdornment, TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';

interface InputUsernameFieldProps {
    id: string;
    value: string;
    label?: string;
    type: string;
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

const InputUsernameField: React.FC<InputUsernameFieldProps> = ({
    id,
    value,
    label,
    type,
    size = 'medium',
    name,
    variant = 'standard',
    // color = 'primary',
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
          // color={color}
          size={size}
          variant="standard"
          type={type}
          // label={label}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          name={name}
          error={error}
          helperText={helperText}
          placeholder = {placeholder? placeholder : 'Username'}
          
          sx={{ gridColumn: `span ${span}`, 
                backgroundColor: "background.primary", color: "text.main", border:"2px solid white",
               }}
          inputProps={{ 
            sx: {
              padding: '0px',
              color: '#ffffff',
              '&::placeholder': {
                  color: '#ffffff',
                  opacity: 1, // otherwise firefox shows a lighter color
              },
            } 
          }}
          InputProps={{
            sx: {
              p: 1,
            },
            disableUnderline: true,
            readOnly: inputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <PermIdentityIcon fontSize="medium" style={{ color: "white"}} />
              </InputAdornment>
            ),
          }}
        />
      </React.Fragment>
    );
  };
  
  export default InputUsernameField;