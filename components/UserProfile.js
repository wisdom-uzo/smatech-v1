export default function UserProfile({ user, isCollapsed }) {
  return (
    <div className="px-4 py-5 border-b border-gray-200">
      {!isCollapsed ? (
        <div className="flex items-center space-x-3">
          {user.photoUrl ? (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user.photoUrl}
              alt="Student photo"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </span>
            </div>
          )}
          <div className="truncate">
            <p className="text-sm font-medium text-gray-700 truncate">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">{user.matricNumber}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          {user.photoUrl ? (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user.photoUrl}
              alt="Student photo"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}