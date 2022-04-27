

interface selectStdPth {
  studyPath: string;
  changeStdPath: (path: string) => void;
  selectItems:(e:React.MouseEvent)=> void
}

export default selectStdPth;