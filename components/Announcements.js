export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'Mid-Semester Break',
      content: 'The mid-semester break will be from October 15th to October 22nd.',
      date: 'October 5, 2023',
      category: 'Academic',
    },
    {
      id: 2,
      title: 'Course Registration Deadline',
      content: 'The deadline for course registration is October 10th. Late registration will attract a penalty fee.',
      date: 'October 1, 2023',
      category: 'Registration',
    },
    {
      id: 3,
      title: 'Library Maintenance',
      content: 'The central library will be closed for maintenance on October 8th.',
      date: 'September 28, 2023',
      category: 'Facility',
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Announcements
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-indigo-600 truncate">
                {announcement.title}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {announcement.category}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  {announcement.content}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <p>{announcement.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4 py-4 sm:px-6 bg-gray-50 text-right">
        <a
          href="/portal/announcements"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all announcements →
        </a>
      </div>
    </div>
  );
}