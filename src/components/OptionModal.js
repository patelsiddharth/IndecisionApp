import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.SelectedOption}
        onRequestClose = {props.closeModal}
        contentLabel = 'Selected Option'
        closeTimeoutMS={200}
        className='Modal'
    >
        <h3 className='Modal__title'>Selected Option</h3>
        {props.SelectedOption && <p className='Modal__body'>{props.SelectedOption}</p>}
        <button className='button button--add' onClick={props.closeModal}>Okay</button>
    </Modal>
)

export default OptionModal;