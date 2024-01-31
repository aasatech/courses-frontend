import { SessionContext } from "./sessionContext";
import { useContext } from "react";
export const useSession = () => {
  return useContext(SessionContext);
};
