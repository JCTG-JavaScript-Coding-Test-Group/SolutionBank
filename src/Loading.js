import spinnerPath from "./images/spinner.svg";
import { useRecoilValue } from "recoil";
import { loadingState } from "./index.js";

export default function Loading() {
  const loading = useRecoilValue(loadingState);
  return loading ? (
    <div className="loading">
      <img src={spinnerPath} alt="Loading..."></img>
      Loading…
    </div>
  ) : null;
}
