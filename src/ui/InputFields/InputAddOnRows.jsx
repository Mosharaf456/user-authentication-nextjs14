import React from 'react';
import { Checkbox, FormControlLabel, Stack, Box, useMediaQuery, useTheme } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ActionButton from '../Button/ActionButton';
import InputTextField from './InputTextField';
import InputSelectField from './InputSelectField';
import InputTimePicker from './InputTimePicker';
import AutoCompleteWithSecondaryLine from './AutoCompleteWithSecondaryLine';
import AutoCompleteInputField from '../InputFields/AutoCompleteInputField';
import { FILTER_TYPES, SEARCH_METHODS } from '../../constant';

const InputAddOnRows = ({ fields, rows, setRows, tableColumns }) => {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const handleAddRow = () => {
        setRows([...rows, fields]);
    };

    const handleDeleteRows = () => {
        const filteredRows = rows.filter((row) => !row.checked);
        setRows(filteredRows);
    };
    const handleChange = (index, field, value, time = false) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };
    return (
        <React.Fragment>
            {rows.map((row, indx) => (
                <React.Fragment key={indx}>
                    <Stack
                        key={indx}
                        direction={smScreen ? "row" : "column"}
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                        spacing={1}
                        useFlexGap
                        mt={2}
                        sx={{ gridColumn: `span ${4}` }}
                    >
                        {tableColumns.map(
                            (
                                {
                                    label,
                                    name,
                                    type,
                                    readOnly = false,
                                    id = '',
                                    selectOptions = [],
                                    labelId = '',
                                    size,
                                    suggestions = [],
                                    freeSolo
                                },
                                index,
                            ) => (
                                <React.Fragment key={index}>
                                    {type === 'text' || type === 'number' ? (
                                        <InputTextField
                                            type={type}
                                            label={label}
                                            value={row[name]}
                                            handleChange={(e) =>
                                                handleChange(indx, name, e.target.value)
                                            }
                                            variant='outlined'
                                            name={`${name}-${indx}`}
                                            // name={name}
                                            color='info'
                                            inputProps={false}
                                            fieldSize={size}
                                        />
                                    ) : type === 'option_select' ? (

                                        <InputSelectField
                                            label={label}
                                            name={`${name}-${indx}`}
                                            value={row[name] || selectOptions[0].value}
                                            variant='outlined'
                                            color='info'
                                            handleChange={(e) =>
                                                handleChange(indx, name, e.target.value)
                                            }
                                            inputProps={row.readOnly || readOnly}
                                            id={id + index.toString()}
                                            items={selectOptions}
                                            labelId={`${labelId}-${index}`}
                                            fieldSize={size}
                                        />

                                    ) : type === 'aucomplete_select' ? (
                                        <AutoCompleteWithSecondaryLine
                                            label={label}
                                            name={`${name}-${indx}`}
                                            variant='outlined'
                                            color='info'
                                            fieldSize='small'
                                            readOnly={!!row.readOnly}
                                            data={selectOptions}
                                            value={selectOptions.find(
                                                (option) => option.id === row[name],
                                            )}
                                            id={id + index.toString()}
                                            labelId={labelId}
                                            handleChange={(_, option) =>
                                                handleChange(indx, name, option?.id)
                                            }
                                            match0='id'
                                            match1='name'
                                            match2='email'
                                        />
                                    ) : type === 'time' ? (
                                        <Box
                                            component='span'
                                            sx={{
                                                minWidth: '20%',
                                            }}
                                        >
                                            <InputTimePicker
                                                inputProps={readOnly}
                                                value={row[name]}
                                                label={label}
                                                name={name}
                                                variant='outlined'
                                                color='info'
                                                fieldSize={size}
                                                handleChange={(e) =>
                                                    handleChange(indx, name, e, true)
                                                }
                                            />
                                        </Box>
                                    ) : type === 'AutoCompleteInputField' ? (
                                        <AutoCompleteInputField
                                            label={label}
                                            value={row[name]}
                                            handleChange={(_, option) => {
                                                handleChange(indx, name, option);
                                            }}
                                            variant='outlined'
                                            // rows={genericNameRowCount[indx] || 1}
                                            multiline={true}
                                            name={`${name}-${indx}`}
                                            options={suggestions}
                                            color={'info'}
                                            // inputProps={false}
                                            // fieldSize='small'
                                            filterOptionConfig={{
                                                limit: 100,
                                                type: FILTER_TYPES.custom,
                                                searchMethod: SEARCH_METHODS.linear,
                                            }}
                                            freeSolo={freeSolo}
                                        />
                                    ) : (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disabled={row.readOnly}
                                                    checked={row[name]}
                                                    onChange={() =>
                                                        handleChange(indx, name, !row.checked)
                                                    }
                                                />
                                            }
                                        />
                                    )}
                                </React.Fragment>
                            ),
                        )}
                    </Stack>
                </React.Fragment>
            ))}
            <Box component='div' sx={{ mt: 2 }} />
            <Box component='span' sx={{ mt: 2 }}>
                <Box component='span' sx={{ gridColumn: `span ${4}` }}>
                    <ActionButton
                        handleClickEvent={handleAddRow}
                        title='Add Row'
                        icon={<AddBoxIcon />}
                        fixedWidth={false}
                    />
                    <Box component='span' sx={{ ml: 1 }} />
                    <ActionButton
                        handleClickEvent={handleDeleteRows}
                        title='Delete Rows'
                        icon={<DeleteForeverIcon />}
                        fixedWidth={false}
                        isDanger={true}
                    />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default InputAddOnRows;
