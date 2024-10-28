import { BASE_URL } from "@/constants/Common";


export const getUserPlatformAsset = async () => {
    try {
        const response = await fetch(
            new URL("api/game/user/userBalance", BASE_URL).toString(),
            {
                method: "GET",
                credentials: "include",
            }
        );


        if (!response.ok) {
            throw new Error("Failed to fetch bounties");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching bounties:", error);
        throw error;
    }
};
