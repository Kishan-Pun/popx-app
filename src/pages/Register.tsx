import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const navigate = useNavigate();

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const isDisabled =
    !form.fullName || !form.phone || !form.email || !form.password;

  return (
    <div className="h-full flex flex-col p-6">
      {/* Top */}
      <div>
        <h1 className="text-xl font-semibold text-black mb-6">
          Create your PopX account
        </h1>

        <div className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter your name"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
          />

          <Input
            label="Phone number"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
          />

          <Input
            label="Email address"
            placeholder="Enter your email address"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            required
          />

          <Input
            label="Company name"
            placeholder="Enter your company name"
            value={form.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>

        {/* Radio */}
        <div className="mt-6">
          <p className="text-sm text-black mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </p>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                checked={form.isAgency === "yes"}
                onChange={() => handleChange("isAgency", "yes")}
                className="accent-[#6C25FF]"
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                checked={form.isAgency === "no"}
                onChange={() => handleChange("isAgency", "no")}
                className="accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Button */}
      <Button
        text="Create Account"
        disabled={isDisabled}
        onClick={() => {
          if (!isDisabled) {
            navigate("/login");
          }
        }}
      />
    </div>
  );
}
