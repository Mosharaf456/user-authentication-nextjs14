import LoginComponent from "@/components/custom-ui/LoginComponent/LoginComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <LoginComponent />
    </main>
  );
}
