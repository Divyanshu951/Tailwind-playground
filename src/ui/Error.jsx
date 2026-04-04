import { Link, useRouteError, isRouteErrorResponse } from "react-router";

function Error() {
  const error = useRouteError();

  // React Router throws Response objects for known errors (404, 500, etc.)
  // Unknown errors are plain Error objects (network failures, JS crashes)
  let title = "Something went wrong";
  let message = "An unexpected error occurred.";
  let status = null;

  if (isRouteErrorResponse(error)) {
    // This is a Response thrown from a loader/action or a 404
    status = error.status;
    switch (error.status) {
      case 404:
        title = "Not Found";
        message = "The resource you requested could not be found.";
        break;
      case 401:
        title = "Unauthorized";
        message = "You don't have permission to access this resource.";
        break;
      case 500:
        title = "Server Error";
        message = error.data || "The server encountered an error.";
        break;
      default:
        title = `Error ${error.status}`;
        message = error.statusText || error.data || "Something went wrong.";
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex h-screen min-h-[60vh] flex-col items-center justify-center bg-black/90 text-center">
      {status && <p className="text-7xl font-black text-red-500">{status}</p>}
      <h1 className="mt-4 text-2xl font-bold text-white">{title}</h1>
      <p className="mt-2 max-w-md text-gray-400">{message}</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-yellow-400 px-6 py-2.5 font-semibold text-black transition-colors hover:bg-yellow-300"
      >
        ← Go back home
      </Link>
    </div>
  );
}

export default Error;
