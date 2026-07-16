import React from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
// Or, you can use ariakit, shadcn, etc.
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
function MyEditor() {
  const editor = useCreateBlockNote();
  console.log("editor", editor);

  return <BlockNoteView className=" min-h-screen" editor={editor} />;
}
export default MyEditor;
