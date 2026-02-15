export default function MainPage() {
  return (
    <div className="flex flex-col h-screen items-center bg-background h">
      <div className="flex h-full w-4/5 bg-primary p-20">
        <div className="flex flex-col justify-center h-full w-1/2">
          <div className="text-onbackground text-8xl font-bold">
            See Through Time
          </div>
          <div className="h-7" />
          <div className="flex h-15">
            <div className="flex-2 bg-white" />
            <div className="flex-1 bg-secondary" />
          </div>
        </div>
      </div>
      <div className="flex h-24 w-4/5 items-center">
        <div className="text-onbackground text-lg font-bold">
          A community-driven dictionary that archives how a word's meaning
          changes over time, with definitions grouped into eras and visualized
          through popularity trends.
        </div>
      </div>
    </div>
  );
}
