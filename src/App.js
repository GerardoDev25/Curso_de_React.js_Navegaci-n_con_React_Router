import { HashRouter, Route, Routes } from 'react-router-dom';

import { Menu } from './Menu.js';
import { HomePage } from './HomePage.js';
import { BlogPage } from './BlogPage.js';
import { ProfilePage } from './ProfilePage.js';
import { BlogPost } from './BlogPost.js';
import { LoginPage } from './LoginPage.js';
import { LogoutPage } from './LogoutPage.js';
import { AuthProvider, AuthRoute } from './auth.js';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
