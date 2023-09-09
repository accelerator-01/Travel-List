import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onTogleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sorteditems;

  if (sortBy === "input") sorteditems = items;
  if (sortBy === "description") sorteditems = items
    .slice()
    .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sorteditems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onTogleItems={onTogleItems} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Select by Input Order</option>
          <option value="description">Select by Description Order</option>
          <option value="packed">Select by Packed Order</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
