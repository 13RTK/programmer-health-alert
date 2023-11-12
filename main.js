import playTrack from "./util/player.js";

let counter = 0;
const THRESHOLD = 1000 * 60 * 30;

const monitor = () => {
    const startTime = Date.now();

    const interval = setInterval(async () => {
        const curTime = Date.now();

        if (curTime - startTime >= THRESHOLD) {
            await startPlay();

            clearInterval(interval);
        }
    }, 1000);
};

const startPlay = async () => {
    console.log("=".repeat(20));
    counter++;
    console.log(`Play time: ${counter}`);

    const audic = await playTrack();

    audic.addEventListener("ended", () => {
        monitor();

        console.log("=".repeat(20));
        audic.destroy();
    });
};

monitor();
