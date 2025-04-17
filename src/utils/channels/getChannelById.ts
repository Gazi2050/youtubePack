import { channelParams, fetchData } from "@constants/url";

export async function getChannelById(id: string, apiKey: string): Promise<any> {
  const url = `${channelParams}&id=${id}&key=${apiKey}`;
  const channelData = await fetchData(url);
  console.log(channelData);
  return channelData;
}
