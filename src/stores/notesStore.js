import axios from "axios";
import { create } from "zustand";

const notesStore = create((set) => ({
  notes: [],
  createForm: {
    title: "",
    body: "",
  },
  updateForm: {
    _id: null,
    title: "",
    body: "",
  },

  setNotes: () =>{
    set({
      notes :[]
    })
  },

  fetchNotes: async () => {

    try {
      const res = await axios.get("/notes");
      set({
        notes: Array.isArray(res.data.notes) ? res.data.notes : res.data.notes===null ?null :  [res.data.notes],
      });
    } catch (error) {
      console.log(error.message)
    }

  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes } = notesStore.getState();
    const res = await axios.post("/notes", createForm);
    const newNotes = notes ===null ?[] : notes;
    newNotes.push(res.data.note);

    set({
      notes: newNotes,
      createForm: { title: "", body: "" },
    });
  },

  deleteNote: async (id) => {
    const res = await axios.delete(`/notes/${id}`);
    const { notes } = notesStore.getState();
    const newNotes = notes.filter((note) => note._id !== id);

    set({
      notes: newNotes,
      updateForm: { _id: null, title: "", body: "" },
    });
    // setUpdateForm({ _id: null, title: "", body: "" });
  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: async (note) => {
    set({
      updateForm: {
        title: note.title,
        body: note.body,
        _id: note._id,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const { updateForm, notes } = notesStore.getState();

    const { title, body } = updateForm;
    const res = await axios.put(
      `/notes/${updateForm._id}`,
      { title, body }
    );

    const newNotes = notes;

    const noteIndex = notes.findIndex((note) => note._id === updateForm._id);
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: { _id: null, title: "", body: "" },
    });
  },
}));

export default notesStore;
