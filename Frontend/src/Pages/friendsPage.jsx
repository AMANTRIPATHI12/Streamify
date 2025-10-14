import React from "react";
import { MessageCircle, Phone } from "lucide-react"; // icons from lucide-react

const FriendsPage = () => {
  // Example friend list (you’ll replace this with API data later)
  const friends = [
    { id: 1, name: "Aman Tripathi", status: "Online", avatar: "https://avatar.iran.liara.run/public/50" },
    { id: 2, name: "Riya Sharma", status: "Offline", avatar: "https://avatar.iran.liara.run/public/34" },
    { id: 3, name: "Rahul Verma", status: "Online", avatar: "https://avatar.iran.liara.run/public/18" },
    { id: 4, name: "Neha Gupta", status: "Offline", avatar: "https://avatar.iran.liara.run/public/92" },
  ];

  return (
    <div className="flex flex-col h-full p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Friends</h1>
        <input
          type="text"
          placeholder="Search friends..."
          className="input input-bordered w-60"
        />
      </div>

      {/* Friends list */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-base-300 bg-base-200 p-4">
        {friends.length === 0 ? (
          <p className="text-center text-gray-500">No friends yet.</p>
        ) : (
          <ul className="space-y-3">
            {friends.map((friend) => (
              <li
                key={friend.id}
                className="flex items-center justify-between rounded-lg bg-base-100 p-3 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/40"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{friend.name}</h2>
                    <p
                      className={`text-sm ${
                        friend.status === "Online"
                          ? "text-green-500"
                          : "text-gray-400"
                      }`}
                    >
                      {friend.status}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline btn-primary flex items-center gap-1">
                    <MessageCircle size={16} />
                    Chat
                  </button>
                  <button className="btn btn-sm btn-outline btn-success flex items-center gap-1">
                    <Phone size={16} />
                    Call
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
