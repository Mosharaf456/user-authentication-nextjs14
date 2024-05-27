import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import InputTextField from './InputTextField';

const FileUploader = ({ selectedFiles, setSelectedFiles = (() => { }) }) => {
    const theme = useTheme();
    const [fileDragOver, setFileDragOver] = useState(false);
    const onDrop = (acceptedFiles) => {
        const allFilesWithDescription = acceptedFiles.map((onefile) => (
            {
                description: "",
                file: onefile
            }
        ));
        setSelectedFiles((prevFiles) => [...prevFiles, ...allFilesWithDescription]);
        setFileDragOver(false)
    };

    const {
        getRootProps,
        getInputProps,
    } = useDropzone({
        onDrop,
        onDragEnter: () => setFileDragOver(true),
        onDragLeave: () => setFileDragOver(false),
        multiple: true,
    });



    const removeFile = (index) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const dropzoneSection = {
        flex: 1,
        border: '2px dashed ' + theme.palette.primary.main,
        borderRadius: '4px',
        padding: '5px',
        textAlign: 'center',
        cursor: 'pointer',
    };

    const dropzoneSectionActive = {
        ...dropzoneSection,
        color: theme.palette.primary.main,
    };

    const textStyles = {
        cursor: 'pointer',
        marginBottom: '8px',
    };
    const handelFileDescriptionChange = (e, index) => {
        const value = e.target.value;
        let fileRows = [...selectedFiles];
        fileRows[index]['description'] = value;
        setSelectedFiles(fileRows)
    }

    return (
        <React.Fragment>
            <Box component="div" display='flex'>
                <Box component="div"  {...getRootProps()} style={fileDragOver ? dropzoneSectionActive : dropzoneSection}>
                    <Box component="input" {...getInputProps()} />
                    <Typography variant="body1" style={textStyles} >
                        Drag and drop or click to add/select files
                        <AddIcon style={{ fontSize: 15 }} />
                    </Typography>
                </Box>

            </Box>
            {selectedFiles.length !== 0 ?
                <Box component="span"
                >
                    <Box
                        {...getRootProps()}

                    >
                        <Box component="input" {...getInputProps()} />
                        {selectedFiles.length === 1 ? (
                            <Typography variant="body1" style={textStyles}>
                                {selectedFiles[0]?.file?.name}
                            </Typography>
                        ) : (
                            <Typography variant="body1" style={textStyles}>
                                {`${selectedFiles.length} files selected`}
                            </Typography>
                        )}
                    </Box>
                    <List>
                        {selectedFiles.map((theFile, index) => (
                            <ListItem key={index} sx={{
                                display: 'flex',
                            }}>
                                <InputTextField
                                    fieldSize='small'
                                    label="Description"
                                    helperText={theFile.file.name}
                                    handleBlur={(e) => handelFileDescriptionChange(e, index)}
                                    handleChange={(e) => handelFileDescriptionChange(e, index)}

                                ></InputTextField>
                                {/* <ListItemText primary={file.name} /> */}
                                <IconButton onClick={() => removeFile(index)}
                                    sx={{
                                        alignSelf: 'self-start'
                                    }}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>

                </Box>
                : null
            }
        </React.Fragment>
    );
};

export default FileUploader;

