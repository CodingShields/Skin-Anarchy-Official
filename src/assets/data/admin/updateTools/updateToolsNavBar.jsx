import {
  BookOpenIcon,
  SparklesIcon,
  BriefcaseIcon,
  MicrophoneIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

import AdminBlog from "../../../../pages/admin/comp/adminBlog";
import ScienceOfSkinAwards from "../../../../pages/admin/comp/scienceOfSkinAwards";
import TopPicksAdmin from "../../../../pages/admin/comp/topPicksAdmin";
import AdminPodcast from "../../../../pages/admin/comp/adminPodcast";
import AdminSponsor from "../../../../pages/admin/comp/adminSponsor";
import AdminStats from "../../../../pages/admin/comp/adminStats";


const adminNavBar = [
  {
    name: "Admin Blog",
    icon: BookOpenIcon,
    helperMessage: "Admin Blog",
    value: <AdminBlog />,
  },
  {
    name: "Science Of Skin Awards",
    icon: SparklesIcon,
    helperMessage: "Science Of Skin Awards",
    value: <ScienceOfSkinAwards />,
  },
  {
    name: "Top Picks Admin",
    icon: BriefcaseIcon,
    helperMessage: "Top Picks Admin",
    value: <TopPicksAdmin />,
  },
  {
    name: "Admin Podcast",
    icon: MicrophoneIcon,
    helperMessage: "Admin Podcast",
    value: <AdminPodcast />,
  },
  {
    name: "Admin Sponsor",
    icon: ChartBarSquareIcon,
    helperMessage: "Admin Sponsor",
    value: <AdminSponsor />,
  },
  {
    name: "Admin Stats",
    icon: ChartBarSquareIcon,
    helperMessage: "Admin Stats",
    value: <AdminStats />,
  },
];

export default adminNavBar;
