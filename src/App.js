import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import GlobalStyle from "./styles/GlobalStyle";
import ProfileEdit from "./pages/Main/components/ProfileEdit";
import ImagePost from "./pages/Upload/ImagePost";
import Feed from "./pages/Feed/Feed";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/imagePost" element={<ImagePost />} />
        <Route path="/insta/:memberId/:postId" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
