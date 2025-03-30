function randomId(length: number = 10): string {
  const id1 = Date.now().toString();
  const id2 = Math.random().toString(36).substr(2);
  const shuffled = (id1 + id2)
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return shuffled.slice(0, length);
}

export default randomId;
