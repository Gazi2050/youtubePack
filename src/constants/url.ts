import axios from "axios";

export const BaseUrl = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const channelParams = '/channels?part=snippet,statistics,brandingSettings&';

export async function fetchData(url: string) {
    try {
        const response = await BaseUrl.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
