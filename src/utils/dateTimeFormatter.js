export const dateFormatter = (date) => {
  const input = new Date(date)
  const options = { day: '2-digit', month: 'short', year: 'numeric' }
  const formattedDate = input.toLocaleDateString('en-US', options)
  return formattedDate
}