import { nanoid } from "nanoid";
import mic from "../../../../icons/homepage/statsContainer/mic.svg";
import headset from "../../../../icons/homepage/statsContainer/headset.svg";
import people from "../../../../icons/homepage/statsContainer/people.svg";
import link from "../../../../icons/homepage/statsContainer/link.svg";

const podcastStats = [
  {
    id: nanoid(),
    name: "Downloads Per Week",
    value: "downloadsPerWeek",
    icon: headset,
  },
  {
    id: nanoid(),
    name: "EPISODES RECORDED",
    value: "episodesRecorded",
    icon: mic,
  },
  {
    id: nanoid(),
    name: "SUBSCRIBERS ACROSS PLATFORMS",
    value: "subscribers",
    icon: people,
  },
  {
    id: nanoid(),
    name: "SOCIAL FOLLOWERS",
    value: "socialFollowers",
    icon: link,
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
