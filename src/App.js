import { HashRouter, Route, Routes } from 'react-router-dom';

import { Menu } from './Menu.js';
import { HomePage } from './HomePage.js';
import { BlogPage } from './BlogPage.js';
import { ProfilePage } from './ProfilePage.js';
import { BlogPost } from './BlogPost.js';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
