"use client";

export default function Step3() {
  return (
    <div className="pl-[120px] pr-[120px] py-8">
      <h1 className="text-3xl font-bold mb-8">Review Your Information</h1>
      <div className="max-w-2xl">
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Document Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Document Name:</span>
                <span className="text-gray-900 font-medium">sample.pdf</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">File Size:</span>
                <span className="text-gray-900 font-medium">2.4 MB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Upload Date:</span>
                <span className="text-gray-900 font-medium">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Name:</span>
                <span className="text-gray-900 font-medium">John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email:</span>
                <span className="text-gray-900 font-medium">
                  john@example.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Phone:</span>
                <span className="text-gray-900 font-medium">
                  +1 (555) 000-0000
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I confirm that all the information provided is accurate and
                complete
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
