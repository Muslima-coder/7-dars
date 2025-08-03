import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from "../pages";
import { PATH } from "./path";
import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from "../assets/icons"
export const routeList = [
    {
        id: 1,
        path: PATH.main,
        title: "Home",
        icon: <HomeIcon/>,
        element: <Home />,
        children: []
    },
    {
        id: 2,
        path: PATH.explore,
        title: "Explore",
        icon: <ExploreIcon/>,
        element: <Explore />,
        children: []
    },
    {
        id: 3,
        path: PATH.notification,
        title: "Notification",
        icon: <NotificationIcon/>,
        element: <Notifications />,
        children: []
    },
    {
        id: 4,
        path: PATH.messages,
        title: "Messages",
        icon: <MessagesIcon/>,
        element: <Messages />,
        children: []
    },
    {
        id: 5,
        path: PATH.bookmarks,
        title: "Bookmarks",
        icon: <BookmarksIcon/>,
        element: <Bookmarks />,
        children: []
    },
    {
        id: 6,
        path: PATH.lists,
        title: "Lists",
        icon: <ListIcon/>,
        element: <Lists />,
        children: []
    },
    {
        id: 7,
        path: PATH.profile,
        title: "Profile",
        icon: <ProfileIcon/>,
        element: <Profile />,
        children: []
    },
    {
        id: 8,
        path: PATH.more,
        title: "More",
        icon: <MoreIcon/>,
        element: <More />,
        children: []
    }
]