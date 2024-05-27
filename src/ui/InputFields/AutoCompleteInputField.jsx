import React, { useState, useEffect, useMemo } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { binarySearch } from '../../utils';
import { FILTER_TYPES, SEARCH_METHODS } from '../../constant';
import { debounce } from 'lodash';


function AutoCompleteInputField({
    options,
    value,
    label,
    name,
    color,
    span,
    variant,
    handleChange = () => { },
    error,
    rows = 1,
    multiline = false,
    readOnly = false,
    fieldSize = 'medium',
    filterOptionConfig,
    disableClearable = false,
    clearOnBlur = false,
    freeSolo = false,
    required = false,
    helperText = '',
}) {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    options = useMemo(() => {
        return filterOptionConfig?.searchMethod === SEARCH_METHODS.binary
            ? [...options].sort()
            : options;
    }, [filterOptionConfig?.searchMethod, options]);

    function removeAccents(string) {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    const handleInputChange = debounce((filterOptionConfig, inputVal) => {
        // Your logic to fetch and set options based on the input value
        return filterOptionConfig?.type === FILTER_TYPES.custom && setInputValue(inputVal);
    }, 400);

    useEffect(() => {
        const limit = filterOptionConfig?.limit || null;
        const type = filterOptionConfig?.type || FILTER_TYPES.default;
        const searchMethod = filterOptionConfig?.searchMethod || SEARCH_METHODS.linear;

        if (type === FILTER_TYPES.custom) {
            const input = inputValue.trim();

            if (input === '')
                return setFilteredOptions(limit ? options.slice(0, limit) : options);

            let matchedOptions;
            if (searchMethod === SEARCH_METHODS.binary) {
                const index = binarySearch(options, input);

                if (index > -1) matchedOptions = [options[index]];
                else matchedOptions = [];
            } else {
                matchedOptions = options.filter((option) => {
                    let formattedInput = removeAccents(input.toLowerCase());
                    let formattedOptionString = removeAccents(option.toLowerCase());

                    return formattedOptionString.startsWith(formattedInput);
                });
            }

            if (limit && matchedOptions.length > limit)
                matchedOptions = matchedOptions.slice(0, limit);

            setFilteredOptions(matchedOptions);
        }
    }, [inputValue]);

    return (
        <Autocomplete
            required={required}
            freeSolo={freeSolo} // True Remove dropdown icon. False makes it visible
            disableClearable={disableClearable}
            fullWidth
            clearOnBlur={clearOnBlur}
            id={name}
            options={filterOptionConfig?.type === FILTER_TYPES.custom ? filteredOptions : options}
            value={value}
            readOnly={readOnly}
            onChange={handleChange}
            onInputChange={(_, inputVal) => {
                if (freeSolo) {
                    handleChange("", inputVal);
                }
                return handleInputChange(filterOptionConfig, inputVal)
            }}
            rows={rows}
            multiline={multiline}
            size={fieldSize}
            sx={{ gridColumn: `span ${span}` }}
            renderInput={(params) => {
                return (
                    <TextField
                        color={color}
                        fullWidth
                        rows={rows}
                        multiline={multiline}
                        error={error}
                        helperText={helperText}
                        value={inputValue}
                        name={name}
                        sx={{ gridColumn: `span ${span}` }}
                        label={label}
                        variant={variant}
                        {...params}
                    />
                );
            }}
        />
    );
}

export default AutoCompleteInputField;
