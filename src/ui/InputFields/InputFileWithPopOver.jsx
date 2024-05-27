import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    Typography,
    Popover,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Box,
    useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const FileUploader = ({ selectedFiles, setSelectedFiles = (() => { }) }) => {
    const theme = useTheme();
    const [popoverAnchor, setPopoverAnchor] = useState(null);
    const [fileDragOver, setFileDragOver] = useState(false);
    const onDrop = (acceptedFiles) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
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

    const handlePopoverOpen = (event) => {
        setPopoverAnchor(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchor(null);
    };

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

    return (
        <Box component="div" display='flex'
        >
            {selectedFiles.length !== 0 ?
                <Box component="span"
                    style={fileDragOver ? dropzoneSectionActive : dropzoneSection}
                >
                    <Box
                        {...getRootProps()}
                        onClick={handlePopoverOpen}
                    >
                        <Box component="input" {...getInputProps()} />
                        {selectedFiles.length === 1 ? (
                            <Typography variant="body1" style={textStyles}>
                                {selectedFiles[0].name}
                            </Typography>
                        ) : (
                            <Typography variant="body1" style={textStyles}>
                                {`${selectedFiles.length} files selected`}
                            </Typography>
                        )}
                    </Box>

                    <Popover
                        open={Boolean(popoverAnchor)}
                        anchorEl={popoverAnchor}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <List>
                            {selectedFiles.map((file, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={file.name} />
                                    <IconButton onClick={() => removeFile(index)}>
                                        <ClearIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Popover>
                </Box>
                : null
            }
            <Box component="div"  {...getRootProps()} style={fileDragOver ? dropzoneSectionActive : dropzoneSection}>
                <Box component="input" {...getInputProps()} />
                <Typography variant="body1" style={textStyles} >
                    {selectedFiles.length !== 0
                        ? 'Add more files'
                        : 'Drag and drop or click to add/select files'
                    }
                    <AddIcon style={{ fontSize: 15 }} />
                </Typography>
            </Box>
        </Box>
    );
};

export default FileUploader;

