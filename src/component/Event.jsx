export default function Event({onPlayMusic,uploadImage}) {
    return (
        <>
            <button onClick={onPlayMusic}>Play Music</button>
            <button onClick={uploadImage}>Upload Image</button>
        </>
    );
}
