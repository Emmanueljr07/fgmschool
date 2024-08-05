import { supabase } from "../supabase";


const getStudents = async() => {
  const res = await supabase.from('student').select("*,class(*),parent(*)")
  return res
}


export { getStudents }