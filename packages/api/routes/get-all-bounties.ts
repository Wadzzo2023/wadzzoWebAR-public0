import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "app/utils/Common";

export const getAllBounties = async () => {

    try {
        const response = await fetch(
            new URL("api/game/bounty", BASE_URL).toString(),
            {
                method: "GET",
                credentials: "include",

            }
        );

        if (response.ok) {
            const data = await response.json();
            return data;
        }

    } catch (error) {
        console.error("Error fetching bounties:", error);
        throw error;
    }
};
