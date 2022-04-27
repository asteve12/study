
interface studyPath {
  path: string;
  changeStudyPath: (path: string) => void;
  selectItems?:(e:React.MouseEvent)=> void
}

export default studyPath;