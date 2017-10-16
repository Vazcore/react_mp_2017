export default {
  dateStringToYear: dateString => {
    const date = new Date(dateString);
    return date.getFullYear();
  }
}