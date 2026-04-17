import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isDisabled = !email || !password;

  return (
    <div className="h-full flex flex-col p-6">
      {/* Top Content */}
      <div>
        <h1 className="text-xl font-semibold text-black mb-2">
          Signin to your PopX account
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="space-y-4">
          <Input
            label="Email Address"
            placeholder="Enter email address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Button */}
      <Button
        text="Login"
        disabled={isDisabled}
        onClick={() => {
          if (!isDisabled) {
            navigate("/account");
          }
        }}
      />
    </div>
  );
}
