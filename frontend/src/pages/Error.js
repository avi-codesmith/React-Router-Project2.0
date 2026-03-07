import MainNavigation from "../components/MainNavigaton";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  let title = "Ops! An error occurred!";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "This page isnt exist";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
