import { clsx } from "clsx";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={clsx(
        "p-4 font-bold rounded-4xl w-60 transition-all duration-300 text-background cursor-pointer hover:scale-105",
        props.variant === "primary"
          ? "bg-primary"
          : "border-2 border-primary text-primary",
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
