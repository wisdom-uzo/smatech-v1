export default function QuickActions() {
  const actions = [
    { name: 'Course Registration', href: '/portal/registration', icon: '📝' },
    { name: 'View Results', href: '/portal/results', icon: '📊' },
    { name: 'Make Payment', href: '/portal/payments', icon: '💳' },
    { name: 'Update Profile', href: '/portal/settings', icon: '👤' },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Quick Actions
        </h3>
      </div>
      <div className="px-4 py-5 sm:p-6 grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <a
            key={action.name}
            href={action.href}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
          >
            <span className="text-2xl mb-2">{action.icon}</span>
            <span className="text-sm font-medium text-gray-700 text-center">
              {action.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}