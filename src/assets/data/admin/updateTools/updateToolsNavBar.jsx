import {
	BookOpenIcon,
	SparklesIcon,
	BriefcaseIcon,
	MicrophoneIcon,
	ChartBarSquareIcon,
	AcademicCapIcon,
	BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

import AdminBlog from "../../../../pages/admin/comp/adminBlog";
import ScienceOfSkinAwards from "../../../../pages/admin/comp/scienceOfSkinAwards";
import AdminTopPicks from "../../../../pages/admin/comp/AdminTopPicks";
import AdminPodcast from "../../../../pages/admin/comp/adminPodcast";
import AdminSponsor from "../../../../pages/admin/comp/adminSponsor";
import AdminStats from "../../../../pages/admin/comp/adminStats";
import AdminMasterClass from "../../../../pages/admin/comp/adminMasterClass";
import AdminCompanyReviews from "../../../../pages/admin/comp/adminCompanyReviews";

const adminNavBar = [
	{
		name: "Admin Blog",
		icon: BookOpenIcon,
		helperMessage: "Admin Blog",
		value: <AdminBlog />,
		active: false,
	},
	{
		name: "Science Of Skin Awards",
		icon: SparklesIcon,
		helperMessage: "Science Of Skin Awards",
		value: <ScienceOfSkinAwards />,
		active: false,
	},
	{
		name: "Top Picks Admin",
		icon: BriefcaseIcon,
		helperMessage: "Top Picks Admin",
		value: <AdminTopPicks />,
		active: false,
	},
	{
		name: "Admin Podcast",
		icon: MicrophoneIcon,
		helperMessage: "Admin Podcast",
		value: <AdminPodcast />,
		active: false,
	},
	{
		name: "Admin Sponsor",
		icon: ChartBarSquareIcon,
		helperMessage: "Admin Sponsor",
		value: <AdminSponsor />,
		active: false,
	},
	{
		name: "Admin Stats",
		icon: ChartBarSquareIcon,
		helperMessage: "Admin Stats",
		value: <AdminStats />,
		active: false,
	},
	{
		name: "Master Class",
		icon: AcademicCapIcon,
		helperMessage: "Master Class",
		value: <AdminMasterClass />,
		active: false,
	},
	{
		name: "SA Reviews",
		icon: BuildingStorefrontIcon,
		helperMessage: "Company Reviews",
		value: <AdminCompanyReviews />,
		active: false,
	},
];

export default adminNavBar;
