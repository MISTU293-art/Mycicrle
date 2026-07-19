import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
    privateKey:"private_xBB/Hezsj9kRcuwpiYCe33d7lAw="
});

async function uploads(buffer) {
    const result = await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.png"
    })
    return result;
};

export default uploads;