import { nanoid } from "nanoid";

const podcastStats = [
  {
    id: nanoid(),
    name: "Downloads Per Week",
    value: "downloadsPerWeek",
  },
  {
    id: nanoid(),
    name: "EPISODES RECORDED",
    value: "episodesRecorded",
  },
  {
    id: nanoid(),
    name: "SUBSCRIBERS ACROSS PLATFORMS",
    value: "subscribers",
  },
  {
    id: nanoid(),
    name: "SOCIAL FOLLOWERS",
    value: "socialFollowers",
  },
];

export { podcastStats };

const podcastDemographics = [
  {
    id: nanoid(),
    name: "Women",
    value: "women",
  },
  {
    id: nanoid(),
    name: "Men",
    value: "men",
  },
  {
    id: nanoid(),
    name: "Age 18-34",
    value: "age1834",
  },
  {
    id: nanoid(),
    name: "Age 35-59",
    value: "age3559",
  },
];

export { podcastDemographics };
