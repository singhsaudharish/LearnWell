
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string, user: User) => void;
  signOut: () => void;
  refreshProfile: () => Promise<void>;
}

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `${API_URL}/api/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const profile = response.data.user;

      setUser(profile);
      localStorage.setItem("user", JSON.stringify(profile));
    } catch (error) {
      console.error("Profile Error:", error);

      // Keep the existing session if the server is temporarily unavailable.
      // Only clear authentication for an invalid/expired token.
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = (token: string, userData: User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    refreshProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
