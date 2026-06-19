
import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";
import { PhotoIcon } from "./Icons";
import { EyeIcon, TrashIcon } from "./Icons";


function ProfileCard({ profile, onView, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <Avatar name={profile.firstName} />
        <div className="min-w-0">
          <p className="font-medium text-sm truncate">{profile.firstName || "Unnamed"}</p>
          <p className="text-xs text-gray-500 truncate">{profile.email || "-"}</p>
        </div>
      </div>
 
      <div className="flex items-center justify-between">
        <StatusBadge status={profile.status} />
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <PhotoIcon /> {(profile.photos || []).length}
        </span>
      </div>
 
      <table className="w-full text-sm">
        <tbody>
          <tr>
            <td className="text-gray-500 py-0.5">City</td>
            <td className="text-right py-0.5">{profile.city || "-"}</td>
          </tr>
          <tr>
            <td className="text-gray-500 py-0.5">Age</td>
            <td className="text-right py-0.5">{profile.age || "-"}</td>
          </tr>
          <tr>
            <td className="text-gray-500 py-0.5">Goal</td>
            <td className="text-right py-0.5 truncate max-w-30">{profile.relationship_goals || "-"}</td>
          </tr>
        </tbody>
      </table>
 
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => onView(profile)}
          className="flex-1 flex items-center justify-center gap-1.5 text-sm border border-gray-300 rounded-md py-1.5 hover:bg-gray-50 transition-colors"
        >
          <EyeIcon /> View
        </button>
        <button
          onClick={() => onDelete(profile)}
          className="flex-1 flex items-center justify-center gap-1.5 text-sm border border-red-300 text-red-600 rounded-md py-1.5 hover:bg-red-50 transition-colors"
        >
          <TrashIcon /> Delete
        </button>
      </div>
    </div>
  );
}

export default ProfileCard