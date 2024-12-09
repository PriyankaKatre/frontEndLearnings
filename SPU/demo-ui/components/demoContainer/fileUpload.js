import React, { useState, useRef, useLayoutEffect }from 'react';
import FileUploader from 'react-drag-drop-files';
import './styles/index.css';

const FileUpload = props => {

    const {
        refreshData,
        setLoader
    } = props;

    const [openModal, setModel] = useState( undefined );

    const [files, setFiles ] = useState( null );

    const modalRef = useRef();

    const clearHandler = (name, type ) => {
        let newFileList= new DataTransfer();

        for (let i = 0; i<files.length; i++) {

            const file =  files[i];

            if (file.name !== name) {
                newFileList.items.add( file );
            };
        };

        setFiles( newFileList.files);
    }

    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal( undefined );
    };

    const handleSubmit= async () => {
        if (files && files.length > 0) {

            setLoader( true);

            const formData = new FormData();

            for (let i = 0; i < files.length; i++ ) {
                formData.append('ces1tInputs', files[i]);
            }

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.status === 'success' ) {
                refreshData();

                setModal( undefined );

                setFiles( null );
            };

            const handleChange= uploadedFiles => {
                if (uploadedFiles && uploadedFiles.length > 0) {
                    setLoader( true);
                    setFiles(uploadedFiles);
                };
            }

        }
        const renderFiles = () => {
            const arr= Array.from( files );
            const fileNames= arr.map( (item, idx ) =>
                <ef-pill
                    clears
                    key={ idx }
                    onClick={ () => {
                    clearHandler( item.name, item.type );
                    }}>{item.name}
                </ef-pill>
            );
        }
        return (
            <div className='files'>
                { fileNames }
            </div>
        );
    };
    return (
        <>
            <ef-button class='button' onclick={ showModal } cta>UPLOAD</ef-button>
            <ef-dialog
                id= 'dlg1'
                ref= {modalRef}
                header = 'Upload Files'
                class='file-upload-model'
                opened = {openModal}>
                    <div className='file-upload-variation'>
                        <div className='upload-form'>
                            <div className='upload-container'>
                                <div className='note'>File source</div>
                                <div className='file-drop'>
                                    <FileUploader
                                        handleChange = { handleChange }
                                        children = {
                                            <div className='placeholder'>
                                                Drag and Drop/select audio &amp; transcript
                                            </div>
                                        }
                                        classes = 'drop-area'
                                        multiple = {true}
                                        name= 'file'
                                    />
                                </div>
                            </div>
                            { files && files.length > 0 && renderFiles() }
                        </div>
                    </div>
                    <div slot = 'footer' className='button-holder'>
                        <ef-button class='button' onClick = {handleSubmit} cta >
                            Upload
                        </ef-button>
                        <ef-button class='button' onClick = {hideModel} >
                            Cancel
                        </ef-button>
                    </div>
            </ef-dialog>
        </>
    );
};

export default FileUpload;
