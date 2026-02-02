interface ExperienceEntryProps {
  period: string;
  company: string;
  location: string;
  position: string;
  details: string[];
}

function ExperienceEntry({
  period,
  company,
  location,
  position,
  details,
}: ExperienceEntryProps) {
  return (
    <div className="border-l-4 border-green-500 dark:border-green-400 rounded-lg p-4 sm:p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:border-l-6 hover:from-green-50 hover:to-green-100 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:scale-[1.02] cursor-pointer">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300 group-hover:text-green-800 dark:group-hover:text-green-300">
            {period}
          </div>
          <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic mb-2 transition-colors duration-300 hover:text-gray-800 dark:hover:text-green-400">
            {company}, {location}
          </div>
          <div className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-green-700 dark:hover:text-green-400">
            {position}
          </div>
        </div>
      </div>

      {details.length > 0 && (
        <ul className="space-y-1 sm:space-y-2 ml-0">
          {details.map((detail, index) => (
            <li
              key={index}
              className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start transition-all duration-200 hover:text-gray-900 dark:hover:text-gray-100 hover:translate-x-1"
            >
              <span className="text-green-500 dark:text-green-400 mr-2 transition-colors duration-200 hover:text-green-600 dark:hover:text-green-300">
                •
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceEntry;
