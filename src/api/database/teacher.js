import { supabase } from "../supabase";


const getTeachers = async() => {
  const res = await supabase.from('teacher').select() 
  return res
}


export { getTeachers }