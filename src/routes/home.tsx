import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <h1>
      <button onClick={logOut}>LogOut!!!</button>
    </h1>
  );
}
