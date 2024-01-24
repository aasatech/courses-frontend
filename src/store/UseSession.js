import { SessionContext } from "./SessionContext";
import { useContext } from "react";
export const useSession = () => {
  return useContext(SessionContext);
};
