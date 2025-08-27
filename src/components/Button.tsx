interface ButtonProps {
    children: React.ReactNode;
  }
  
  export default function Button({ children }: ButtonProps) {
    return (
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
        {children}
      </button>
    );
  }
  