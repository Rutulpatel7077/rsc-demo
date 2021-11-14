import moment from "moment";
import excerpts from "excerpts";
import marked from "marked";

import ClientSideNote from "./ClientSideNote.client";

export default function Note({ note }) {
  const updatedAt = new Date(note.updated_at);
  const lastUpdatedAt = moment().isSame(updatedAt, "day")
    ? `At ${moment(updatedAt).format("h:mm a")}`
    : moment(updatedAt).format("LLL");

  const summary = excerpts(marked(note.body), { words: 20 });

  return (
    <ClientSideNote
      id={note.id}
      expandedChildren={
        <p className="sidebar-note-excerpt">{summary || <i>(No content)</i>}</p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{note.title}</strong>
        <small>{lastUpdatedAt}</small>
      </header>
    </ClientSideNote>
  );
}
