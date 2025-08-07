// src/lib/dataService.ts
import { supabase } from "./supabaseClient";

export const submitApplication = async (formData: {
  name: string;
  email: string;
  phone: string;
  state: string;
  country: string;
  qualification: string;
}) => {
  const { data, error } = await supabase.from("applications").insert([formData]);
  return { data, error };
};
