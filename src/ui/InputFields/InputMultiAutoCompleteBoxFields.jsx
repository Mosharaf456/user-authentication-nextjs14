import React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function InputMultiAutoCompleteBoxFields({ freeSolo = false, dataArray = [], label = "", onChangeFunc = null, span = '2', name = "" }) {
    return (
        <Stack spacing={3} sx={{ gridColumn: `span ${span}` }} >
            <Autocomplete
                freeSolo={freeSolo}
                multiple
                id="tags-outlined"
                options={dataArray}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                onChange={(event, value) => onChangeFunc(name, value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        placeholder={label}
                    />
                )}
            />
        </Stack>
    );
}

export default InputMultiAutoCompleteBoxFields;
