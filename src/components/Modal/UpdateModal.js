import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
import notesStore from '../../stores/notesStore'

const UpdateModal = ({isOpen , onClose}) => {

    const store = notesStore();
  
    return (
      <>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form
        action=""
        className="flex flex-col space-y-5"
      >
        <input
          value={store.updateForm.title}
          onChange={store.handleUpdateFieldChange}
          type="text"
          name="title"
          placeholder='Title'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
          name="body"
          placeholder='Write your notes here'
          className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </form>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={ (e)=> {
                store.updateNote(e)
                onClose();
              }}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default UpdateModal
