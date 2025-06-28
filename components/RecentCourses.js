export default function RecentCourses() {
  const courses = [
    {
      id: 1,
      code: 'CSC 401',
      title: 'Advanced Programming',
      lecturer: 'Dr. Smith',
      progress: 80,
      color: 'indigo'
    },
    {
      id: 2,
      code: 'MTH 301',
      title: 'Discrete Mathematics',
      lecturer: 'Prof. Johnson',
      progress: 65,
      color: 'blue'
    },
    {
      id: 3,
      code: 'PHY 201',
      title: 'Modern Physics',
      lecturer: 'Dr. Williams',
      progress: 45,
      color: 'green'
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Recent Courses
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {courses.map((course) => (
          <div key={course.id} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  {course.code} - {course.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Lecturer: {course.lecturer}
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                In Progress
              </span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Course progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`bg-${course.color}-600 h-2.5 rounded-full`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6 text-right">
        <a
          href="/portal/courses"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all courses →
        </a>
      </div>
    </div>
  );
}