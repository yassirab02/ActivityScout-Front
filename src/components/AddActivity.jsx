import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const countryCityMap = {
  USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
  Morocco: ['Marrakesh', 'Rabat', 'Tanger', 'Agadir', 'Casablanca'],
  UK: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
  Germany: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne']
};

export default function AddActivity() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setCities(countryCityMap[country] || []);
  };

  return (
    <form className="max-w-4xl mx-auto mt-6">
      <div className="border-b border-gray-900/10">
        <h2 className="text-3xl font-bold leading-7 text-blue-700 mb-6 text-center mt-4">Add Activity</h2>
        <div className="grid grid-cols-1 gap-y-8 w-full max-w-md mx-auto">
          <div className="flex flex-col">
            <label htmlFor="activity-name" className="block text-lg font-medium leading-6 text-blue-700">
              Name
            </label>
            <div className="mt-2">
              <input
                id="activity-name"
                name="activity-name"
                type="text"
                placeholder="Enter activity name"
                autoComplete="off"
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="activity-type" className="block text-lg font-medium leading-6 text-blue-700">
              Type
            </label>
            <div className="mt-2">
              <input
                id="activity-type"
                name="activity-type"
                type="text"
                placeholder="E.g., Sports, Education, etc."
                autoComplete="off"
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="activity-country" className="block text-lg font-medium leading-6 text-blue-700">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="activity-country"
                  name="activity-country"
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="" disabled>Select a country</option>
                  {Object.keys(countryCityMap).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <label htmlFor="activity-city" className="block text-lg font-medium leading-6 text-blue-700">
                City
              </label>
              <div className="mt-2">
                <select
                  id="activity-city"
                  name="activity-city"
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled>Select a city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="working-time" className="block text-lg font-medium leading-6 text-blue-700">
              Working Time
            </label>
            <div className="mt-2">
              <input
                id="working-time"
                name="working-time"
                type="text"
                placeholder="E.g., 9 AM - 5 PM"
                autoComplete="off"
                className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full mb-3">
            <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-blue-700">
              Add a picture
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="mx-auto h-48 w-auto" />
                ) : (
                  <>
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 mb-3 mr-3">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900 rounded-md px-2 py-1 border border-blue-200 hover:border-blue-700">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Activity
        </button>
      </div>
    </form>
  );
}
