





const STATUS_STYLES = {
completed: "bg-green-100 text-green-700",
  draft: "bg-amber-100 text-amber-700",
};
function StatusBadge() {

 
 const cls = STATUS_STYLES[status] || "bg-gray-100 text-gray-700";
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-md capitalize ${cls}`}>
      {status || "unknown"}
    </span>
  )
}

export default StatusBadge
