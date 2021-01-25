export function convertSubjectMessage(date_auth, date_store){
  let dateStoreParse = Date.parse(date_store);
  let dateAuthParse = Date.parse(date_auth);
  return (dateStoreParse + dateAuthParse).toString(36).substring(0).toUpperCase()
}
