import Audic from "audic";
import sourceLoader from "./sourceLoader.js";

export default async () => {
    // const curTrack = "./public/audio/demo-audio.mp3";
    const curTrack = await sourceLoader("./public/audio/");
    console.log(curTrack);

    const audic = new Audic(curTrack);

    audic.play();
    return audic;
};
