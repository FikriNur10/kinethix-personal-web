import React from "react"; // Import React
import "../App.css";

export default function ContactMe() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-6 gap-4 p-4 bg-black rounded-lg shadow-lg h-screen w-100">
        {/* Grid Item 1 */}
        <div className="col-span-6 md:col-span-4 row-span-2 border-2 border-white rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Grid 1
        </div>
        {/* Grid Item 2 */}
        <div className="col-span-3 md:col-span-2 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Grid 2
        </div>
        {/* Grid Item 3 */}
        <div className="col-span-3 md:col-span-2 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Grid 3
        </div>
        {/* Grid Item 4 */}
        <div className="col-span-6 md:col-span-2 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Grid 4
        </div>
        {/* Grid Item 5 */}
        <div className="col-span-6 md:col-span-4 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          Grid 5
        </div>
      </div>
    </div>
  );
}
