import Header from "../../components/Header/Header";

const SketchDownload = () => {
    return (
        <div className="sketch-download-header-wrapper">
            <Header
                purpleBg={true}
                pIntro="Almost ready to supercharge accessibility!"
                h1Text={`Installing 
                Stark for Sketch...`}
                pText="If your download doesn’t start automatically, click the button. While you wait, check out Stark on other platforms for free."
            />
        </div>
    )
}

export default SketchDownload;