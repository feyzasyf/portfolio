export default function ProgressBar() {
  return (
    <div
      aria-hidden='true'
      className='absolute left-0 top-2 sm:top-1 w-1 h-11/12 sm:h-10/12 border rounded-lg bg-green-700 '
    >
      <div className='h-full w-full bg-green-500'></div>
    </div>
  );
}
