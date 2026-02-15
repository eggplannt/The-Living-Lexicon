export default function MainPage() {
  return (
    <div className="flex flex-col h-screen items-center bg-background px-30">
      <div className="flex w-full h-full bg-primary p-20 rounded-lg">
        <div className="flex flex-col justify-center h-full w-1/2">
          <div className="text-onbackground text-9xl font-bold">
            See Through Time
          </div>
          <div className="h-15" />
          <div className="flex h-16 w-full overflow-clip rounded-md bg-white items-center pl-5 ">
            <div className="text-gray-600 text-2xl">Search for a word</div>
          </div>
          <div className="h-6" />
          <div className="flex h-16 w-72 bg-secondary overflow-clip rounded-md items-center justify-center">
            <div className="text-onbackground text-lg">
              Enter new word definition
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-24 items-center"></div>
    </div>
  );
}
