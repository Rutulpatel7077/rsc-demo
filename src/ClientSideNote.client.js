import { useState, useRef, useEffect } from "react";

export default function ClientSideNote({ title, children, expandedChildren }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemRef = useRef(null);
  const prevTitleRef = useRef(title);
  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
      itemRef.current.classList.add("flash");
    }
  }, [title]);

  return (
    <div
      ref={itemRef}
      onAnimationEnd={() => {
        itemRef.current.classList.remove("flash");
      }}
      className={[
        "sidebar-note-list-item",
        isExpanded ? "note-expanded" : "",
      ].join(" ")}
    >
      {children}
      <button
        className="sidebar-note-open"
      >
        Open note for preview
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <img
            src="chevron-down.svg"
            width="10px"
            height="10px"
            alt="Collapse"
          />
        ) : (
          <img src="chevron-up.svg" width="10px" height="10px" alt="Expand" />
        )}
      </button>
      {isExpanded && expandedChildren}
    </div>
  );
}
