import ReactQuill from "react-quill"

const modules = {
  toolbar: [
      ["font", "header"], ["bold", "underline"],
  ]
}

const EditDescription = () => {
  return (
    <ReactQuill modules={modules} theme="snow"/>
  )
}
export default EditDescription