import NotFound from "../Components/NotFound";
import AddContactPage from "../pages/AddContactPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

const allPages = [
  { path: "/contact/:id", component: ContactPage },
  { path: "/AddContact", component: AddContactPage },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default allPages;
