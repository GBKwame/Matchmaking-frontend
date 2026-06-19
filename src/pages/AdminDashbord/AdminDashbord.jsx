import  { useEffect, useState, useMemo } from "react";


import StatCard from "./component/StatCard";
import ProfileCard from "./component/profileCard";
import ViewModal from "./component/viewModal";
import DeleteModal from "./component/DeleteModel";
import { EmptyIcon } from "./component/Icons";

const API_BASE = "/admin-api"; // adjust to match your routes mount path
 
 
export default function AdminProfileDashboard() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
 
  const [viewProfile, setViewProfile] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
 
 


  useEffect(() => {
  let active = true; 

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${API_BASE}/all_profiles`);
      const data = await res.json();
      if (active) setProfiles(Array.isArray(data) ? data : data.profiles || data.data || []);
      console.log(data);
    } finally {
      if (active) setLoading(false);
    }
  };

  load();

  return () => {
    active = false; 
  };
}, []);
 
  async function handleConfirmDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${API_BASE}/delete_profile/${deleteTarget._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete profile");
      setProfiles((prev) => prev.filter((p) => p._id !== deleteTarget._id));
      setDeleteTarget(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  }
 
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return profiles.filter((p) => {
      const matchStatus = statusFilter === "all" || p.status === statusFilter;
      const matchSearch =
        !q ||
        (p.firstName || "").toLowerCase().includes(q) ||
        (p.email || "").toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [profiles, statusFilter, search]);
 
  const stats = useMemo(
    () => ({
      total: profiles.length,
      completed: profiles.filter((p) => p.status === "completed").length,
      draft: profiles.filter((p) => p.status === "draft").length,
      withPhotos: profiles.filter((p) => p.photos && p.photos.length > 0).length,
    }),
    [profiles]
  );
 
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Profiles</h1>
          <p className="text-sm text-gray-500 mt-1">Manage user submitted profiles</p>
        </div>
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="all">All status</option>
            <option value="completed">Completed</option>
            <option value="draft">Draft</option>
          </select>
          <input
            type="text"
            placeholder="Search name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>
 
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Total profiles" value={stats.total} />
        <StatCard label="Completed" value={stats.completed} />
        <StatCard label="Drafts" value={stats.draft} />
        <StatCard label="With photos" value={stats.withPhotos} />
      </div>
 
      {error && (
        <div className="bg-red-50 text-red-700 text-sm rounded-md px-4 py-3 mb-4">
          {error}
        </div>
      )}
 
      {loading ? (
        <div className="text-center py-16 text-gray-400">Loading profiles...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="flex justify-center mb-2">
            <EmptyIcon />
          </div>
          <p>No profiles match your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProfileCard
              key={p._id}
              profile={p}
              onView={setViewProfile}
              onDelete={setDeleteTarget}
            />
          ))}
        </div>
      )}
 
      <ViewModal profile={viewProfile} onClose={() => setViewProfile(null)} />
      <DeleteModal
        profile={deleteTarget}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleConfirmDelete}
        deleting={deleting}
      />
    </div>
  );
}