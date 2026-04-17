type Props = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-lg font-medium transition ${
        disabled
          ? "bg-gray-300 text-white cursor-not-allowed"
          : variant === "primary"
          ? "bg-[#6C25FF] text-white"
          : "bg-[#EDE5FF] text-[#6C25FF]"
      }`}
    >
      {text}
    </button>
  );
}