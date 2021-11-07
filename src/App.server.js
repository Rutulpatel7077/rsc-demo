import { Suspense } from "react";
import NoteList from "./NoteList.server";
import SearchField from "./SearchField.client";
import NoteListSkeleton from "./HelperComponents/NoteListSkeleton";
import Footer from "./Footer.server";
// import Button from "./Button.client";

export default function App({ searchText }) {
  return (
    <div className="main">
      <section className="sidebar">
        <section className="sidebar-header">
          <strong>React Server Components</strong>
        </section>
        <section className="sidebar-menu" role="menubar">
          <SearchField />
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <NoteList searchText={searchText} />
          </Suspense>
        </nav>
      </section>
      <Footer />
    </div>
  );
}
