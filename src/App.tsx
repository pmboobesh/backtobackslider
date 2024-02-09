import "./App.css";
import BackToBackImageSlider from "./BackToBackImageSlider";

function App() {
  return (
    <>
      <BackToBackImageSlider
        leftImage="https://uploads.codesandbox.io/uploads/user/99e3605e-982c-4a1f-8e02-1bcf37f8dd15/1iOR-1.png"
        rightImage="https://uploads.codesandbox.io/uploads/user/99e3605e-982c-4a1f-8e02-1bcf37f8dd15/oVtF-2.png"
        borderRadius={0} // vertical={true}
      />
    </>
  );
}

export default App;
