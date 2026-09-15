import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../config/AuthProvider";

export const useNavLinks = () => {
  const { keycloak, authenticated, initialized } = useAuth();
  const navigate = useNavigate();

  const firstName = keycloak.tokenParsed?.given_name;
  const lastName = keycloak.tokenParsed?.family_name;

  const displayName =
    [firstName, lastName].filter(Boolean).join(" ") ||
    keycloak.tokenParsed?.preferred_username ||
    "Korisnik";

  const handleLogin = () => {
    keycloak.login({
      redirectUri: window.location.origin,
    });
  };

  const handleRegister = () => {
    keycloak.register({
      redirectUri: window.location.origin,
    });
  };

  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin,
    });
  };

  const handlePostAd = () => {
    if (authenticated) {
      navigate("/postavi-oglas");
      return;
    }

    handleLogin();
  };

  const handleProfile = () => {
    navigate("/profil");
  };

  const handleMyAds = () => {
    navigate("/moji-oglasi");
  };

  return {
    keycloak,
    initialized,
    authenticated,
    displayName,

    handleLogin,
    handleRegister,
    handleLogout,
    handlePostAd,
    handleProfile,
    handleMyAds,
  };
};