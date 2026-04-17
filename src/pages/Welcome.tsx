import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col p-6">
      {/* Spacer */}
      <div className="flex-1" />

      {/* Content */}
      <div>
        <h1 className="text-xl font-semibold text-black mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="space-y-3">
          <Button text="Create Account" onClick={() => navigate("/register")} />
          <Button
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}
