export default function VideoContainer() {
  return (
    <div className="video-container">
      <video
        src="/video/sample-video.mp4" // Ensure this video exists in the public folder
        controls
        loop
        muted
      ></video>
    </div>
  );
}
