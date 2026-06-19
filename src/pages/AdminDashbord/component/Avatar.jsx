



function Avatar({ name }) {
  const initials = (name || "?")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
 
  const colors = [
    "bg-purple-100 text-purple-700",
    "bg-teal-100 text-teal-700",
    "bg-pink-100 text-pink-700",
    "bg-blue-100 text-blue-700",
    "bg-amber-100 text-amber-700",
  ];
  let hash = 0;
  for (let i = 0; i < (name || "").length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const colorClass = colors[Math.abs(hash) % colors.length];
 
  return (
    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-medium text-sm shrink-0 ${colorClass}`}>
      {initials}
    </div>
  );
}

export default Avatar