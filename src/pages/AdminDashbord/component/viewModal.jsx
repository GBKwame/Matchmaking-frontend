import Avatar from "./Avatar";
import { CloseIcon } from "./Icons";
import StatusBadge from "./StatusBadge";


function ViewModal({ profile, onClose }) {
  if (!profile) return null;
 
  const fields = [
    ["Phone", profile.phoneNumber],
    ["Gender", profile.gender],
    ["Residence", profile.residence],
    ["Nationality", profile.nationality],
    ["Occupation", profile.occupation],
    ["Education", profile.education],
    ["Religion", profile.religion],
    ["Has children", profile.children],
    ["Wants children", profile.wantChildren],
    ["Smoking / drinking", profile.smoking_drinking],
    ["Languages", profile.language],
    ["Personalities", profile.personalities],
    ["Hobbies", profile.hobbies],
    ["Passion", profile.passion],
    ["Relationship values", profile.relationship_values],
    ["Relationship goals", profile.relationship_goals],
    ["Preferred age range", profile.prefrence_age_range],
    ["Preferred location", profile.prefrence_location],
    ["Open to long distance", profile.open_to_long_distance],
    ["Desired qualities", profile.desired_quality_in_a_partner],
    ["Dealbreakers", profile.dealbreakers],
    ["Created", profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : "-"],
  ].filter(([, v]) => v !== undefined && v !== null && v !== "");
 
  return (
    <div
      className="fixed inset-0 bg-black/45 flex items-start sm:items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar name={profile.firstName} />
            <div>
              <p className="font-medium">{profile.firstName || "Unnamed"}</p>
              <p className="text-xs text-gray-500">{profile.email || "-"}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
          >
            <CloseIcon />
          </button>
        </div>
 
        <StatusBadge status={profile.status} />
 
        {profile.photos && profile.photos.length > 0 ? (
          <div className="flex gap-2 flex-wrap mt-3">
            {profile.photos.map((photo, i) => (
              <img
                key={i}
                src={photo.url}
                alt={`Profile photo ${i + 1}`}
                className="w-16 h-16 rounded-md object-cover border border-gray-200"
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 mt-3">No photos uploaded</p>
        )}
 
        <table className="w-full text-sm mt-4">
          <tbody>
            {fields.map(([k, v]) => (
              <tr key={k} className="border-t border-gray-100 first:border-t-0">
                <td className="text-gray-500 py-1.5 align-top w-2/5">{k}</td>
                <td className="text-right py-1.5">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default ViewModal;
