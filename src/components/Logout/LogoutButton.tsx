"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'GET',
      });
      if (response.ok) {
        console.log('Logged out successfully');
        router.push('/login');
      } else {
        console.error('Failed to logout:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }, [router]);

  return (
    <button type="button" onClick={handleLogout}>
      Logout_USINGAPI
    </button>
  );
};

export default LogoutButton;
