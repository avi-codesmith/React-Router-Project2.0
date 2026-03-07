import MainNavigation from "../components/MainNavigaton";
import { Outlet } from "react-router-dom";

function RootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && (
          <p>loading.. ............................................."</p>
        )} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
