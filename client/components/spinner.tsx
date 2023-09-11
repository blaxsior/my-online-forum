import { CatIcon } from 'lucide-react';

function Spinner() {
  return (
    <div className="p-3 space-y-3">
      <CatIcon className="animate-spin h-8 w-8 m-auto" />
      <p className="text-center">Loading...</p>
    </div>
  );
}

export default Spinner;
