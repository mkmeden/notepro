import React from "react";
import notesStore from "../stores/notesStore";

const UpdateForm = () => {
  const store = notesStore();
  return (
    <div>
      {store.updateForm._id && (
        <div>
          <h1>Update note</h1>
          <form
            onSubmit={store.updateNote}
            action=""
            className="flex flex-col space-y-5"
          >
            <input
              value={store.updateForm.title}
              onChange={store.handleUpdateFieldChange}
              type="text"
              name="title"
              className="rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            />
            <textarea
              onChange={store.handleUpdateFieldChange}
              value={store.updateForm.body}
              name="body"
              className="rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            />
            <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateForm;
