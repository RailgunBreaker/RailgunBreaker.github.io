interface EducationEntryProps {
  period: string;
  institution: string;
  location: string;
  degree: string;
  details: string[];
}

function EducationEntry({
  period,
  institution,
  location,
  degree,
  details,
}: EducationEntryProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-blue-500 rounded-lg p-4 sm:p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:border-l-6 hover:from-blue-50 hover:to-blue-100 hover:scale-[1.02] cursor-pointer">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-800">
            {period}
          </div>
          <div className="text-sm sm:text-base text-gray-600 italic mb-2 transition-colors duration-300 hover:text-gray-800">
            {institution}, {location}
          </div>
          <div className="text-base sm:text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-700">
            {degree}
          </div>
        </div>
      </div>

      {details.length > 0 && (
        <ul className="space-y-1 sm:space-y-2 ml-0">
          {details.map((detail, index) => (
            <li
              key={index}
              className="text-sm sm:text-base text-gray-700 flex items-start transition-all duration-200 hover:text-gray-900 hover:translate-x-1"
            >
              <span className="text-blue-500 mr-2 transition-colors duration-200 hover:text-blue-600">
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

export default EducationEntry;
