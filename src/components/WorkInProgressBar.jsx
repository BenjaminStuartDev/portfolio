import ConstructionWorker from "../../public/construction_worker.svg";
import Image from "next/image";

export default function WorkInProgressBar() {
  return (
    <section className="w-full h-14 bg-mine-shaft flex items-center justify-center">
      <Image
        src={ConstructionWorker}
        alt="Construction Worker"
        width={50}
        height={50}
      />
      <h1 className="font-family:montserrat font-semibold text-2xl text-construction-yellow">
        <a
          href="https://media.tenor.com/PG2ujR7H4UMAAAAd/dog-hot.gif"
          target="_blank"
          rel="noreferrer"
        >
          Site Under Construction
        </a>
      </h1>
    </section>
  );
}
