import { useEffect, useState } from "react";
import { useAppState } from "./Utilites/AppStateContext.client";

export default function SearchField() {
  const [text, setText] = useState("");
  const [, setAppState] = useAppState();

  useEffect(() => {
    setAppState((loc) => ({
      ...loc,
      searchText: text,
    }));
  }, [text]);

  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label className="offscreen" htmlFor="sidebar-search-input">
        Search for a note by title
      </label>
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      />
    </form>
  );
}
