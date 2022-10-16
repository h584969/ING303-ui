import './App.css';
import { useState } from 'react';
import EditItem from './pages/edit_item';
import DeleteItem from "./pages/delete_item";
import PageObject from './util/page_object';
import WaitForItem from './pages/wait_for_item';
function App() {
  /**
   * @type {[PageObject, (PageObject) => void]}
   */
  const [page, setPage] = useState(null);

  return !!page ? 
            page.page :
            <WaitForItem setPage={setPage} />
}

export default App;
