import { Camera } from "lucide-react";

export default function Account() {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b">
        <h1 className="text-lg font-semibold text-black">Account Settings</h1>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Profile Section */}
        <div className="flex items-start gap-4 mb-4">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Small camera icon (optional) */}
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <Camera size={14} />
            </div>
          </div>

          {/* Name + Email */}
          <div>
            <h2 className="text-sm font-semibold text-black">Marry Doe</h2>
            <p className="text-xs text-gray-500">marrydoe@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed border-b border-dashed pb-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}
