import { hocCreator, compose } from "./utils/hoc-wrapper";
import { ClientContextProvider, Client } from "./api/clients";
import Header from "./components/header";
import { useSuspense } from "./utils/suspense";

const clientProvider = hocCreator(ClientContextProvider, { client: Client });

const suspense = useSuspense(Header);

const AppKernel = compose(
  clientProvider,
  suspense
);

export default AppKernel;
