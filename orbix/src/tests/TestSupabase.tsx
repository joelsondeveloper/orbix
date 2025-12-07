import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function TestSupabase() {
  useEffect(() => {
    supabase.auth.getSession().then((res) => {
      console.log("SESSION:", res);
    });
  }, []);

  return <div>Testando sessão...</div>;
}
