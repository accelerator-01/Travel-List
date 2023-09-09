export default function Stats({ items }) {
  if (!items.length) return (
    <p className="stats">
      <em>Start Add Your Item On Packing List!🚀</em>
    </p>
  );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You Got Everything You Need! Ready to GO!✈️" :
          `🎒 You have ${numItem} item on your list, and you already packed ${""}${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
