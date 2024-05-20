import { redirect } from "next/navigation";
import { getSession } from "@/app/lib";

export default async function Page() {
  const session = await getSession();
  return (
    <section>
        {
          session !== null ? redirect('/dashboard') : redirect('/login')
        }
     </section>
  );
}