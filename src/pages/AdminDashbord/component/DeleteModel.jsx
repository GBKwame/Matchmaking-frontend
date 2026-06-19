import { TrashIcon } from "./Icons";

function DeleteModal({ profile, onCancel, onConfirm, deleting }) {
  if (!profile) return null;
 
  return (
    <div className="fixed inset-0 bg-black/45 flex items-center justify-center p-4 z-50" onClick={onCancel}>
      <div
        className="bg-white rounded-xl border border-gray-200 p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3">
          <TrashIcon />
        </div>
        <p className="font-medium mb-1">Delete {profile.firstName || "this profile"}?</p>
        <p className="text-sm text-gray-500 mb-4">
          This action cannot be undone. The profile and its photos will be permanently removed.
        </p>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={deleting}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1.5 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50 disabled:opacity-50"
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;