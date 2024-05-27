import React from 'react';
import { TextField, Box, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Stack } from '@mui/system';

function ImageInputField({
    value,
    label,
    name,
    variant,
    color,
    span,
    handleBlur,
    handleChange,
    error,
    helperText,
    setFieldValue,
}) {
    return (
        <React.Fragment>
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
                sx={{ gridColumn: `span ${span}` }}
                InputProps={{
                    readOnly: true,
                    shrink: false,
                    endAdornment: (
                        <>
                            <Button
                                sx={{ bottom: '5px' }}
                                variant='contained'
                                component='label'
                                color='primary'
                            >
                                <Stack spacing={1} direction='row'>
                                    <CloudUploadIcon />
                                    <Box>Upload</Box>
                                    <input
                                        accept='image/*'
                                        style={{ display: 'none' }}
                                        type='file'
                                        onChange={(e) =>
                                            setFieldValue(name, e.target.files[0].name)
                                        }
                                    />
                                </Stack>
                            </Button>
                        </>
                    ),
                }}
            />
        </React.Fragment>
    );
}

export default ImageInputField;
