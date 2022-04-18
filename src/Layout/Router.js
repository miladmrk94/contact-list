import AddContactPage from "../pages/AddContactPage";
import HomePage from "../pages/HomePage";

const allPages = [
  { path: "/", component: HomePage, exact: true },
  { path: "/AddContact", component: AddContactPage },
];

export default allPages;
