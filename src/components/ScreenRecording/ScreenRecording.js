import * as React from "react";
import { useMediaRecorder } from "../../hooks/useMediaRecorder";
import Button from "../Button";
const ScreenRecording = ({
  screen,
  audio,
  video,
  downloadRecordingPath,
  downloadRecordingType,
  emailToSupport
}) => {
  const [recordingNumber, setRecordingNumber] = React.useState(0);

  const {
    status,
    startRecording: startRecord,
    stopRecording: stopRecord,
    mediaBlobUrl
  } = useMediaRecorder({ screen, audio, video });
  const startRecording = () => {
    return startRecord();
  };
  const stopRecording = () => {
    const currentTimeStamp = new Date().getTime();
    setRecordingNumber(currentTimeStamp);
    return stopRecord();
  };
  const viewRecording = () => {
    window.open(mediaBlobUrl, "_blank").focus();
  };
  const downloadRecording = () => {
    const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
    try {
      if (window.navigator?.msSaveOrOpenBlob) {
        // for IE
        window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
      } else {
        // for Chrome
        const link = document.createElement("a");
        link.href = mediaBlobUrl;
        link.download = pathName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.debug(err);
    }
  };
  const mailRecording = () => {
    try {
      window.location.href = `mailTo:${emailToSupport}?subject=Screen recording for an Issue number ${recordingNumber}&body=Hello%20Team,%0D%0A%0D%0A${mediaBlobUrl}`;
    } catch (err) {
      console.debug(err);
    }
  };
  console.debug("status", status);
  return (
    <div className="py-1 px-5">
      <div>
        <div style={{ lineHeight: "24px" }}>
          {status && status !== "stopped" && (
            <p>Screen Recording Status: {status?.toUpperCase()}</p>
          )}
          {status && status === "recording" && (
            <Button type="button" className="bg-[#faad14] ml-1">
              processing
            </Button>
          )}
        </div>
        <div style={{ textAlign: "right" }}>
          {status && status !== "recording" && (
            <Button
              size="small"
              onClick={startRecording}
              type="primary"
              icon="play-circle"
              className="margin-left-sm"
              ghost
            >
              {mediaBlobUrl ? "Record again" : "Record your Problem"}
            </Button>
          )}
          {status && status === "recording" && (
            <Button
              size="small"
              onClick={stopRecording}
              type="danger"
              icon="stop"
              className="margin-left-sm"
              ghost
            >
              Stop Recording
            </Button>
          )}
          {mediaBlobUrl && status && status === "stopped" && (
            <Button
              size="small"
              onClick={viewRecording}
              type="primary"
              icon="picture"
              className="viewRecording margin-left-sm"
            >
              View
            </Button>
          )}
          {downloadRecordingType &&
            mediaBlobUrl &&
            status &&
            status === "stopped" && (
              <Button
                size="small"
                onClick={downloadRecording}
                type="primary"
                icon="download"
                className="downloadRecording margin-left-sm"
              >
                Download
              </Button>
            )}
          {emailToSupport && mediaBlobUrl && status && status === "stopped" && (
            <Button
              size="small"
              onClick={mailRecording}
              type="primary"
              icon="mail"
              className="mailRecording margin-left-sm"
            >
              Email To Support
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ScreenRecording;
