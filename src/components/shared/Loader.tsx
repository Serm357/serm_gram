import { Suspense } from "react";

const Loader = () => (
  <div className="flex-center w-full">
    <Suspense fallback={<></>}>
      <img
        src="/assets/icons/loader.svg"
        alt="loader"
        width={24}
        height={24}
        className="animate-spin text-primary-600 bg-primary-600"
      />
    </Suspense>
  </div>
);

export default Loader;
