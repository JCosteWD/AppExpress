/* import { useNavigate } from "react-router-dom";

function Dashboard() {
  const isAuthenticated = document.cookie.includes("token=");
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  return (
    <div>
      {isAuthenticated && (
        <>
        <h1>Bienvenue sur le dashboard</h1>
        <button onClick={handleLogout}>Déconnexion</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
 */