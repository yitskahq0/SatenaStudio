import { Link } from "react-router-dom";
import Ads1 from "../components/Ads1";
import Ads2 from "../components/Ads2";
import Project from "../components/Project";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <Ads1 />
      <Project />
      <Service />
      <Ads2 />
    </>
  );
}
