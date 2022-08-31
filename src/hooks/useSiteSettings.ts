import useSWRImmutable from "swr/immutable";
import { getSiteSettings } from "../api/siteSettings";

export const useSiteSettings = () => {
  const { data, error } = useSWRImmutable("site-settings", getSiteSettings);
  return { data: data ? data[0] : null, error };
};
