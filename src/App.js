import "./styles.css";
import Example from "./hooks/1-fetch-example";
import Proptypes from "./propTypes";
import ReactRouterSetup from "./reactRouter";
import MemoUseMemoUseCallback from "./memo-useMemo-useCallback";

export default function App() {
  return <div className="App">{<MemoUseMemoUseCallback />}</div>;
}
