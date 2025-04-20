export const getQuestions = async (limit: number, url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  // Shuffle the questions and limit the number of questions to the specified limit
  return data.sort(() => Math.random() - 0.5).slice(0, limit)
}
