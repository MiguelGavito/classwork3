import Calculator from "@/app/component/Calculator";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center mt-4">Calculadora</h1>
      <Calculator apiUrl="http://localhost:3001" />
    </div>
  );
}
