import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import EditItem from './pages/edit_item';
import DeleteItem from "./pages/delete_item";
import PageObject from './util/page_object';
function App() {
  /**
   * @type {[PageObject, (PageObject) => void]}
   */
  const [page, setPage] = useState(null);

  
  if (page == null){
    const pageObject = new PageObject(() => <EditItem setPage={setPage} />);
    setPage(pageObject);
    return <div></div>
  }
  else{
    return page.page;
  }
}

export default App;
