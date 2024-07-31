'use client'
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
  session?: any; // Replace 'any' with the actual session type if available
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
