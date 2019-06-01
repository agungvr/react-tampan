import { hocCreator, compose } from "./utils/hoc-wrapper";
import { ClientContextProvider, Client } from "./api/clients";
import Sidebar from "./components/sidebar";
import { useSuspense } from "./utils/suspense";

const clientProvider = hocCreator(ClientContextProvider, { client: Client });

const suspense = useSuspense(Sidebar);

const AppKernel = compose(
  clientProvider,
  suspense
);

export default AppKernel;
