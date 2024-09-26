import React from "react";
import notesStore from "../stores/notesStore";

const CreateForm = () => {
  const store = notesStore();
  return (
    <div>
      <h1>Create note</h1>
      <form
        action=""
        className="flex flex-col space-y-5"
        onSubmit={store.createNote}
      >
        <input
          value={store.createForm.title}
          onChange={store.updateCreateFormField}
          type="text"
          name="title"
          className="rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        />
        <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
          className="rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        />
        <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
