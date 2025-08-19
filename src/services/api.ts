import { ApiResponse } from '@/types/user';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getRandomUser = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/?results=1&nat=us`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user data');
  }
};
