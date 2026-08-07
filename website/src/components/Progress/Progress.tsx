
import './Progress.css';
type ProgressProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Progress({ count, setCount }: ProgressProps) {
    
  return (
  <div id="progress" className="progress-card">
    <h3>Vision Progress</h3>

    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${count}%` }}
      ></div>
    </div>

    <p>{count}% Complete</p>

    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => Math.min(count + 1, 100))}
    >
      Increase Progress
    </button>
  </div>
  
);

}

export default Progress;